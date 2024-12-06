<h1 align="center">Utils</h1>

<div align="center">

**🔧 Utilities to make my life better**

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/5ouma/utils?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/5ouma/utils?style=flat-square)
[![GitHub last commit](https://img.shields.io/github/last-commit/5ouma/utils?style=flat-square)](https://github.com/5ouma/utils/commit/HEAD)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/5ouma/utils?style=flat-square)](https://github.com/5ouma/utils/commits/main)
<br />
[![pre-commit](https://img.shields.io/github/actions/workflow/status/5ouma/utils/pre-commit.yml?label=pre-commit&style=flat-square)](https://github.com/5ouma/utils/actions/workflows/pre-commit.yml)

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
        with:
          config: path/to/config
          # default is .github/pre-commit.yml
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
  "extends": ["github>5ouma/utils"]
}
```
