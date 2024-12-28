```javascript
// In a functional component
const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Incorrect update of state
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
```