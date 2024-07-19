# spact

`spact` is a lightweight JavaScript library for building user interfaces. It provides a simple API for creating components and managing state. It includes basic hooks like `useState`, `useRef`, and `useEffect`, as well as routing utilities like `Router`, `addRoute`, and `renderWithRouter`.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [createElement](#createelement)
  - [render](#render)
  - [useState](#usestate)
  - [useRef](#useref)
  - [useEffect](#useeffect)
  - [rerender](#rerender)
  - [ce](#ce)
  - [addRoute](#addroute)
  - [Router](#router)
  - [renderWithRouter](#renderwithrouter)
- [Contributing](#contributing)
- [License](#license)

## Features
- Create elements and render them to the DOM.
- Manage state with the `useState` hook.
- Create references with the `useRef` hook.
- Execute side effects with the `useEffect` hook.
- Define and handle routes with `Router` and `addRoute`.
- Easily re-render components with `rerender`.
- Support for JSX-like syntax with the `ce` function.

## Installation
You can quickly set up a new `spact` project by downloading and running the CLI script:

```sh
curl -o- https://raw.githubusercontent.com/yourusername/spact/main/spact-cli.js | node - init my-spact-project

This command will create a new project directory with the basic structure and example files.

## Usage
Here is a basic example to get you started:

### index.html
  ```code
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spact App</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="index.js"></script>
  </body>
  </html>

