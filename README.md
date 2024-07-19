# spact

`spact` is a lightweight JavaScript library for building user interfaces. It provides a simple API for creating components and managing state. It includes basic hooks like `useState`, `useRef`, and `useEffect`, as well as routing utilities like `Router`, `addRoute`, and `renderWithRouter`.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
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

## API

### createElement
    ```js
    createElement(type, props, ...children)
    
Creates a new element of the given type with the specified properties and children.


