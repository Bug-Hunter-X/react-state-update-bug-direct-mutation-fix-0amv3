```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Directly modifying count
    count = count + 1; 
  }, []);

  return <div>Count: {count}</div>;
}
```