# netlify demo

## Requirements:

- `Node` [(17.2.0 or greater)](https://nodejs.org/en/download/)
- `nvm` [(0.39.0 or greater)](https://github.com/nvm-sh/nvm#installing-and-updating)

## Architecture

This webapp is composed of two components hosted on [Netlify](https://docs.netlify.com/):

- Frontend. A Parcel webapp written in typescript. [Read more about Parcel here](https://parceljs.org/)
- Serverless Function exposed via an abstract Netlify API. [Read more about Netlify Functions here](https://docs.netlify.com/functions/overview/)

Both services are orchestrated using a `netlify.toml` file based configuration. [You can read more about it here](https://docs.netlify.com/configure-builds/file-based-configuration/).

## Usage

This repo supports a local environment

### Local

Ensure you have installed local dependancies first

```
// load node environment
nvm use

// install dependancies
npm i
```

You can then the application with the following commands:

```
// run main app in development mode
npm run dev

// linting
npm run lint
```

Visit http://localhost:8888 to see the site.

### Debugging

This repo comes with a basic launch config for VSCode. [Read more on VS Code Debugging with Node here](https://code.visualstudio.com/docs/editor/debugging) or [Parcel Debugging Here](https://parceljs.org/recipes/debugging/)

#### Steps:

1. Start the dev server:

```
npm run dev
```

2. Start the debugging process in VSCode by clicking Green arrow in the debug panel. You should now be able to set breakpoints in your code.
