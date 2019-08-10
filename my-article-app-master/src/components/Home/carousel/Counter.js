import React from 'react';
export function Counter() {
    const [counter, setCounter] = React.useState(0);
    React.useEffect(() => {
      const timer = setInterval(() => {
        setCounter(prevCount => prevCount + 1); // <-- Change this line!
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }, []); // Pass in empty array to run effect only once!
  
    return (
      <div>Count: {counter}</div>
    );
  }