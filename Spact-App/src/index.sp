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