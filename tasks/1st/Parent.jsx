import React, { useState, useMemo, useCallback } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(['Learn React', 'Build Projects']);

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, 'New Todo']);
  }, []);

  // useMemo is not strictly required here unless todos were expensive to calculate
  const memoizedTodos = useMemo(() => todos, [todos]);

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
      <button onClick={addTodo}>Add Todo</button>

      <Child todos={memoizedTodos} />
    </div>
  );
};

export default Parent;
