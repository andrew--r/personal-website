---
layout: article
tags: writing
title: Global .gitignore
description: Global .gitignore with all your environment-specific exclusions would reduce noise and benefit all your projects
date: 2020-01-14
---

Developers often put environment-specific stuff in their project’s .gitignore:

```
.idea
node_modules
dist
.DS_Store
.vscode
```

Only 2 of 5 entries are directly related to the project specifics (node_modules and dist). The more developers are on the project, the more noise appears in it’s .gitignore.

From my point of view, a good practice is creating personal global .gitignore with all your environment-specific exclusions such as <abbr class="caps" title="Integrated development environment">IDE</abbr> settings or <abbr class="caps" title="Operating system">OS</abbr> generated files:

```
$ git config --global core.excludesfile ~/.gitignore_global
```


Do it once and forget about accidentally committing files that should be ignored and adding them to local .gitignore every time you start a new project.

If your teammate adds to .gitignore something that relates to his development environment and not to the project, ask him to create a global .gitignore with that stuff — it will benefit not only your’s project, but all other projects that they work on.
