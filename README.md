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
