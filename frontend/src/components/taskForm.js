import { useState } from "react";

const TaskForm = ({ holiday }) => {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [completed, setCompleted] = useState("no");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const updateHoliday = async (taskID) => {
    holiday.taskList.push(taskID);
    const response = await fetch("/api/holidays/" + holiday._id, {
      method: "PATCH",
      body: JSON.stringify(holiday),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) {
      console.log("Holiday updated: " + json);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = { name, dueDate, completed };
    const response = await fetch("/api/holidays/task", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setError(null);
      setEmptyFields([]);
      setName("");
      setDueDate("");
      setCompleted("no");
      updateHoliday(json._id);
      console.log("New task added:", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add Tasks</h3>

      <label>Name:</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className={emptyFields.includes("name") ? "error" : ""}
      />

      <label>Due date:</label>
      <input
        type="date"
        onChange={(e) => setDueDate(e.target.value)}
        value={dueDate}
        className={emptyFields.includes("dueDate") ? "error" : ""}
      />

      <button>Add Task</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default TaskForm;
