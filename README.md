<h1 align="center">Utils</h1>

<div align="center">

**🔧 Utilities to make my life better**

<br />

[![GitHub Release](https://img.shields.io/github/v/release/5ouma/utils?style=flat-square)](https://github.com/5ouma/utils/releases)
[![Release](https://img.shields.io/github/actions/workflow/status/5ouma/utils/release.yml?label=Release&style=flat-square)](https://github.com/5ouma/utils/actions/workflows/release.yml)
[![pre-commit](https://img.shields.io/github/actions/workflow/status/5ouma/utils/pre-commit.yml?label=pre-commit&style=flat-square)](https://github.com/5ouma/utils/actions/workflows/pre-commit.yml)

![Repobeats Analytics Image](https://repobeats.axiom.co/api/embed/d782636a7ff8da4b10a5eb4c9465b211d5f003d5.svg)

</div>

<br /><br />

## 🐙 GitHub Composite Actions

### 🚸 pre-commit

```yml
jobs:
  job:
    runs-on: Ubuntu-Latest
    steps:
      - uses: 5ouma/utils/pre-commit@v0.4.10
        with:
          token: ${{ secrets.GITHUB_TOKEN }} # Optional
```

### 🍞 Setup Bun with Cache

```yml
jobs:
  job:
    runs-on: Ubuntu-Latest
    steps:
      - uses: 5ouma/utils/setup-bun-with-cache@v0.4.10
```

### 🔒 Update Deno Lock File

```yml
jobs:
  job:
    runs-on: Ubuntu-Latest
    steps:
      - uses: 5ouma/utils/update-deno-lock-file@v0.4.10
```

> [!IMPORTANT]
> You need to:
>
> 1. install [autofix.ci](https://autofix.ci) to commit the changes.
> 2. name workflows `autofix.ci`

## 🏷️ Labeler

```yml
jobs:
  job:
    permissions:
      pull-requests: write
    runs-on: Ubuntu-Latest
    steps:
      - uses: fuxingloh/multi-labeler@v4
        with:
          config-repo: 5ouma/utils
```

<br />

## 🎨 Renovate

```json
{
  "extends": ["github>5ouma/utils#v0.4.10", "github>5ouma/utils:labels#v0.4.10"]
}
```
