<h1 align="center">Utils</h1>

<div align="center">

**🔧 Utilities to make my life better**

<br />

[![pre-commit](https://img.shields.io/github/actions/workflow/status/5ouma/utils/pre-commit.yml?label=pre-commit&style=flat-square)](https://github.com/5ouma/utils/actions/workflows/pre-commit.yml)

![Repobeats Analytics Image](https://repobeats.axiom.co/api/embed/d782636a7ff8da4b10a5eb4c9465b211d5f003d5.svg)

</div>

<br /><br />

## 🐙 GitHub Composite Actions

### 🚸 pre-commit

```yml
jobs:
  build:
    runs-on: Ubuntu-Latest
    steps:
      - uses: 5ouma/utils/pre-commit@main
```

### 🍞 Setup Bun with Cache

```yml
jobs:
  build:
    runs-on: Ubuntu-Latest
    steps:
      - uses: 5ouma/utils/setup-bun-with-cache@main
```

### 🦕 Setup Deno with Cache

```yml
jobs:
  build:
    runs-on: Ubuntu-Latest
    steps:
      - uses: 5ouma/utils/setup-deno-with-cache@main
```

<br />

## 🎨 Renovate

```json
{
  "extends": ["github>5ouma/utils", "github>5ouma/utils:labels"]
}
```
