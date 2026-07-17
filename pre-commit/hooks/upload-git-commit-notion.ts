#!/usr/bin/env -S deno run -EN='api.notion.com' --allow-run='git,op'

import { git } from "jsr:@roka/git@0.4.0";
import gitUrlParse from "npm:git-url-parse@16.1.0";
import { item } from "npm:@1password/op-js@0.1.13";
import { Client } from "npm:@notionhq/client@5.23.1";

const range = {
  from: Deno.env.get("PRE_COMMIT_FROM_REF"),
  to: Deno.env.get("PRE_COMMIT_TO_REF"),
};
const url = (() => {
  const remoteUrl = Deno.env.get("PRE_COMMIT_REMOTE_URL");
  if (!remoteUrl) throw new Error("PRE_COMMIT_REMOTE_URL is not set");
  const { source, full_name } = gitUrlParse(remoteUrl);
  return `https://${source}/${full_name}`;
})();
const commits = await git().commit.log(range);

const [database_id, auth] = (() => {
  const data = item.get("Notion Git Integration", {
    fields: { label: ["database-id", "credential"] },
  });
  if (!Array.isArray(data)) throw new Error("Data is not an array");
  return data.map((field) => field.value);
})();
const client = new Client({ auth });

for (const commit of commits) {
  const res = await client.pages.create({
    parent: { database_id },
    properties: {
      Message: { title: [{ type: "text", text: { content: commit.subject } }] },
      ...(commit.body && {
        Description: {
          rich_text: [{ type: "text", text: { content: commit.body } }],
        },
      }),
      Hash: { rich_text: [{ type: "text", text: { content: commit.short } }] },
      URL: { url },
      Date: { date: { start: commit.author.date.toInstant().toString() } },
    },
  });
  console.log(res.id);
}
