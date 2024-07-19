import { ce, useState, useEffect } from 'spact';
  import '../styles/styles.css';
  
  export function CountingComponent() {
    const [count, setCount] = useState(0);
  
    // useEffect for logging count changes
    useEffect(() => {
      console.log(`Count updated: ${count}`);
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
          ce('p', { className: 'count' }, `Count: ${count}`),
          ce('div', { className: 'button-container' },
            ce('button', { className: 'increment-button', onclick: incrementCount }, 'Increment'),
            ce('button', { className: 'reset-button', onclick: resetCount }, 'Reset')
          )
        )
      )
    );
  }