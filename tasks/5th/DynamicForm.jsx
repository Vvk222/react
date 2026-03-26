import React, { useState } from "react";

function DynamicForm() {
  const [fields, setFields] = useState([{ value: "" }]);

  const handleChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    setFields(newFields);
  };

  const addField = () => {
    setFields([...fields, { value: "" }]);
  };

  const removeField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submitted Values:\n" + fields.map(f => f.value).join(", "));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Dynamic Input Fields</h2>

      {fields.map((field, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={field.value}
            onChange={(event) => handleChange(index, event)}
            placeholder={`Input ${index + 1}`}
          />
          <button type="button" onClick={() => removeField(index)} disabled={fields.length === 1}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={addField}>Add Field</button>
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm;
