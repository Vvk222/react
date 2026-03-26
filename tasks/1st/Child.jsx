import React from 'react';

const Child = React.memo(({ todos }) => {
  console.log('Child component rendered');

  return (
    <div>
      <h3>Child Component - Todo List</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
});

export default Child;
