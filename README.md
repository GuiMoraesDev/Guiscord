# Guiscord

<Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png" alt="react logo" height="100px" align="right" />

[![axios](https://img.shields.io/badge/axios-%5E0.25.0-%235A29E4)](https://axios-http.com/)
[![next](https://img.shields.io/badge/nextjs-%5E12.0.8-white)](https://nextjs.org/)
[![typescript](https://img.shields.io/badge/typescript-%5E4.4.4-blue?logo=Typescript)](https://www.typescriptlang.org/)
[![styled-components](https://img.shields.io/badge/styled--components-%5E5.3.3-ff69b4?logo=styled-components)](https://styled-components.com/)

</br>

<small>All badges are links to each doc</small>

## Description of that project 📖

Guiscord app is an POC that use nextjs and supabase to create a Discord based app. This app let you talk with user that you follow in github

## Requirements 🛑

### Mandatory

For development, you will need some software installed in your environment.

- [NodeJS](https://nodejs.org/en/download/) >= v14.17,
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

### Optional

To improve your experience and enjoy each linter, here are some extensions </br>
<small>For VSCode, if you use another editor, please look at your marketplace</small>

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [Editorconfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

## Configuring your Project 🧰

Yarn will install all dependencies into all projects, start and build them

```batch
yarn install
yarn start
yarn build
```

## Project Folders Structure 👷

```code
.
├── .vscode..............................# contains the settings to vscode;
├── src..................................# source projects and packages folders were created here;
│    ├── apps............................# contain  all projects files and folders;
│    │   └── [project_folders]
│    └── packages........................# contains all packages that could be used by each app;
│        ├── assets......................# centralize animations, icons and images;
│        │   ├── animations..............# centralize animations and create React Components to each one;
│        │   ├── icons...................# centralize icons and create React Components to each one;
│        │   └── images..................# centralize images and create React Components to each one;
│        ├── components..................# contains shared components;
│        │   └── [components_folders]
│        ├── configs.....................# contains a config file that share info on project;
│        ├── context.....................# contains shared context;
│        ├── hooks.......................# contains shared hooks;
│        │   └── [hooks_files]
│        ├── pages.......................# contains shared pages;
│        │   └── [pages_folders]
│        ├── services....................# centralize icons and create React Components to each one;
│        └── styles......................# centralize icons and create React Components to each one;
│            ├── pages...................# contains styles of each page of project (it's an alternative to follow the good pratices on NextJs)
│            ├── theme...................# themes files are placed here
│            └── [...]...................# others global styles files
└── [...]................................# root files as environment, linters, etc;
```

## Project Linters 🧹

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## Project Maintenance 👨‍🔧

- Project is using Angular Commits Guide Line, for more information, click on this [link](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format).

## How this project can grow? 🪴

- Tests, tests and more tests
- Apply internationalization would be a good option to turn it more world wide spread.
- Maybe this project could be better with more themes
