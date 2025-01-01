```javascript
// In a React 19 functional component using the useState hook:
import { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1); // Correct usage 
    setCount(prevCount => prevCount + 1); // This line might be problematic depending on the rendering behavior
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```