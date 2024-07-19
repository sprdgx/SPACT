# SPact: Lightweight Frontend Framework

SPact is a minimalist JavaScript framework designed for building modern web applications with a focus on simplicity and performance. This guide will help you set up, use, and contribute to SPact.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Creating Components](#creating-components)
  - [Routing](#routing)
- [Configuration](#configuration)
- [Development](#development)
  - [Running Tests](#running-tests)
  - [Contributing](#contributing)
- [FAQ](#faq)
- [License](#license)
- [Contact](#contact)

## Introduction

SPact is a lightweight framework for building user interfaces with minimal setup. It provides a simple API for creating components and managing state, making it ideal for small to medium-sized applications.

## Features

- **Minimalist API:** Easy-to-use functions for creating and managing components.
- **State Management:** Built-in hooks for managing component state.
- **Routing:** Simple routing system for single-page applications.
- **CSS Integration:** Support for loading and applying CSS styles.

## Installation

### Automatic Installation

To automatically install SPact and set up your environment, follow these steps:

1. **Download and Run the Installer:**

   ```bash
   curl -L -o install_spactcli.sh https://raw.githubusercontent.com/sprdgx/spactCli/main/install_spactcli.sh
   ```

This script will download the SPact CLI tools, install them , and create a symbolic link to the spact command.

2. **Verify Installation:**

   ```bash
   spact --help
   ```

## Usage

### Basic Usage

To start using SPact, you need to create a new project and initialize it with the SPact CLI.


1. **Initialize a New Project::**

   ```bash
   spact init <project_name>
   ```

This command will create a new project directory with the necessary files.


2. **Start the Development Server:**

   ```bash
   cd <project_name>
   spact start
   ```

The development server will start, and your application will be accessible at http://localhost:3000.

3. **Build the Project:**

   ```bash
   cd <project_name>
   spact build
   ```

This command will generate the production-ready files and place them in the dist directory. You can then deploy these files to your web server.

### Creating Components

Components are the building blocks of a SPact application. Here’s a basic example of creating a component:


   ```js
   import { ce, useState, useEffect } from 'spact';
   import '../styles/styles.css';
   
   export function MyComponent() {
     const [count, setCount] = useState(0);
   
     useEffect(() => {
       console.log(`Count updated: ${count}`);
     }, [count]);
   
     const incrementCount = () => setCount(count + 1);
     const resetCount = () => setCount(0);
   
     return (
       ce('div', { className: 'my-component' },
         ce('h1', null, 'Counter'),
         ce('p', null, `Count: ${count}`),
         ce('button', { onclick: incrementCount }, 'Increment'),
         ce('button', { onclick: resetCount }, 'Reset')
       )
     );
   }

   ```

### Routing

SPact includes a simple routing mechanism. Here’s how you can define and use routes:


   ```js
import { ce, addRoute, renderWithRouter } from 'spact';
import { MyComponent } from './components/MyComponent';

addRoute('/', MyComponent);

const rootContainer = document.getElementById('root');
renderWithRouter(null, rootContainer);
   ```

# Configuration
SPact can be configured using Webpack. Refer to the webpack.config.js and webpack.prod.js files for configuration details.

## Contributing

If you’d like to contribute to SPact, please follow these guidelines:

1. **Fork the repository and clone your fork.**
2. **Create a new branch for your changes.**
3. **Make your changes and commit them.**
4. **Push your changes and open a pull request.**

# FAQ

### Q: How do I update SPact?

   **A: Run the installation script again to get the latest version.**

### Q: Can I use SPact with other libraries or frameworks?

**A: Yes, SPact is designed to be lightweight and can be integrated with other tools and libraries.**

# License
SPact is licensed under the MIT License. See the LICENSE file for details.



