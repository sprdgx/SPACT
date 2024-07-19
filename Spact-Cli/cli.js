#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const command = process.argv[2];

switch (command) {
    case "init":
        createWebProdFILE();
        createIndexFILE();
        createA7ssebFILE();
        createWebConfigFILE();
        createCSSFILE();
        createPackageFILE();
        createPubHTMLFILE();
        break;
    default:
        console.log(`Unknown command: ${command}`);
}

function createA7ssebFILE() {
    const dir = './src/compo';
    const SPContent = `
  import { ce, useState, useEffect } from 'spact';
  import '../styles/styles.css';
  
  export function CountingComponent() {
    const [count, setCount] = useState(0);
  
    // useEffect for logging count changes
    useEffect(() => {
      console.log(\`Count updated: \${count}\`);
    }, [count]);
  
    const incrementCount = () => {
      setCount(count + 1);
    };
  
    const resetCount = () => {
      setCount(0);
    };
  
    return (
      ce('div', { className: 'counting-component' },
        ce('h1', { className: 'counting-title' }, 'Counting Clicks'),
        ce('div', { className: 'counting-container' },
          ce('p', { className: 'count' }, \`Count: \${count}\`),
          ce('div', { className: 'button-container' },
            ce('button', { className: 'increment-button', onclick: incrementCount }, 'Increment'),
            ce('button', { className: 'reset-button', onclick: resetCount }, 'Reset')
          )
        )
      )
    );
  }
  `;
  
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true }); // Ensure parent directories are created
    }
  
    fs.writeFileSync(path.join(dir, 'a7sseb.sp'), SPContent.trim());
  }

  function createIndexFILE() {
    const dir = './src';
    const SPContent = `

    
import { ce, rerender, addRoute, renderWithRouter } from 'spact';
import { CountingComponent } from './compo/a7sseb.sp';

// Function to dynamically load a CSS file
function loadCSS(filename) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = filename;
  document.head.appendChild(link);
}

// Load the CSS file
loadCSS('./styles/styles.css');

// Add routes
addRoute('/', CountingComponent);

// Initial render with router
const rootContainer = document.getElementById('root');
renderWithRouter(null, rootContainer);

  
  `;
  
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true }); // Ensure parent directories are created
    }
  
    fs.writeFileSync(path.join(dir, 'index.sp'), SPContent.trim());
  }
  
  function createWebProdFILE() {
    const dir = './';
    const webpackProdContent = `
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  
  module.exports = {
    entry: './src/index.sp',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        templateContent: \`
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Sact Project</title>
          </head>
          <body>
              <div id="root"></div>
              <script src="bundle.js"></script>
          </body>
          </html>
        \`,
      }),
    ],
  };
  `;
  
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true }); // Ensure parent directories are created
    }
  
    fs.writeFileSync(path.join(dir, 'webpack.prod.js'), webpackProdContent.trim());
  }

  function createWebConfigFILE() {
    const dir = './';
    const webpackProdContent = `

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.sp',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/, // Assuming you have a loader for .sp files
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [], // Disable clean-webpack-plugin during development
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true, // Ensure HtmlWebpackPlugin injects script tags into the HTML
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true, // Add this line to handle routing with webpack-dev-server
  },
};


  `;
  
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true }); // Ensure parent directories are created
    }
  
    fs.writeFileSync(path.join(dir, 'webpack.config.js'), webpackProdContent.trim());
  }



  function createCSSFILE() {
    const dir = './src/styles';
    const webpackProdContent = `

/* styles.css */

.counting-component {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f0f0f0;
  }
  
  .counting-title {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
  }
  
  .counting-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .count {
    font-size: 18px;
    color: #666;
    margin-bottom: 15px;
  }
  
  .button-container {
    display: flex;
    gap: 10px;
  }
  
  .increment-button,
  .reset-button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
  }
  
  .increment-button:hover,
  .reset-button:hover {
    background-color: #0056b3;
  }
  

  `;
  
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true }); // Ensure parent directories are created
    }
  
    fs.writeFileSync(path.join(dir, 'styles.css'), webpackProdContent.trim());
  }
  
  function createPubHTMLFILE() {
    const dir = './public';
    const webpackProdContent = `

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Webpack Dev Server</title>
  <link rel="stylesheet" href="./styles/styles.css">
</head>
<body>
  <div id="root"></div>
  <!-- Webpack Dev Server automatically injects bundle.js here -->
</body>
</html>


  `;
  
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true }); // Ensure parent directories are created
    }
  
    fs.writeFileSync(path.join(dir, 'index.html'), webpackProdContent.trim());
  }
  
  function createPackageFILE() {
    const dir = './';
    const webpackProdContent = `

{
    "name": "spact",
    "version": "1.0.0",
    "description": "A Example Counting Spact App",
    "scripts": {
        "start": "webpack serve --config webpack.config.js",
        "sps-build": "webpack --config webpack.prod.js"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "babel-loader": "^8.2.2",
        "clean-webpack-plugin": "^3.0.0",
        "html-webpack-plugin": "^5.3.1",
        "spact": "^1.0.0",
        "webpack": "^5.39.1",
        "webpack-cli": "^4.7.2",
        "webpack-dev-server": "^3.11.2"
    },
    "devDependencies": {
        "@babel/core": "^7.14.6",
        "@babel/preset-env": "^7.14.5",
        "css-loader": "^7.1.2",
        "style-loader": "^4.0.0",
        "webpack-merge": "^6.0.1"
    }
}



  `;
  
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true }); // Ensure parent directories are created
    }
  
    fs.writeFileSync(path.join(dir, 'package.json'), webpackProdContent.trim());
  }
  