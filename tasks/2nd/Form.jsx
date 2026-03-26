import React, { useState } from "react";

const DynamicForm = () => {
  const [inputs, setInputs] = useState([{ value: "" }]);

  const handleChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index].value = event.target.value;
    setInputs(newInputs);
  };

  const handleAdd = () => {
    setInputs([...inputs, { value: "" }]);
  };

  const handleRemove = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted values:\n" + inputs.map(i => i.value).join(", "));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Dynamic Input Fields</h2>
      {inputs.map((input, index) => (
        <div key={index} className="mb-2 flex items-center gap-2">
          <input
            type="text"
            value={input.value}
            onChange={(e) => handleChange(index, e)}
            className="border px-2 py-1 rounded w-full"
            placeholder={`Input ${index + 1}`}
          />
          <button
            type="button"
            onClick={() => handleRemove(index)}
            className="text-white bg-red-500 px-2 py-1 rounded"
            disabled={inputs.length === 1}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="flex gap-2 mt-4">
        <button
          type="button"
          onClick={handleAdd}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add Field
        </button>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-1 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default DynamicForm;
