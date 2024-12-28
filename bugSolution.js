```javascript
// In a functional component
const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Correct update of state using functional form
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
```