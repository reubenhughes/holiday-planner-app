import { useState } from "react";

const POIForm = ({ holiday }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const updateHoliday = async (poiID) => {
    holiday.poiList.push(poiID);
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
    const poi = { name, type, location, notes };
    const response = await fetch("/api/holidays/poi", {
      method: "POST",
      body: JSON.stringify(poi),
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
      setType("");
      setLocation("");
      setNotes("");
      updateHoliday(json._id);
      console.log("New POI added:", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add Places of Interest</h3>

      <label>Name:</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className={emptyFields.includes("name") ? "error" : ""}
      />

      <label>Type:</label>
      <input
        type="text"
        onChange={(e) => setType(e.target.value)}
        value={type}
        className={emptyFields.includes("type") ? "error" : ""}
      />

      <label>Location:</label>
      <input
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        className={emptyFields.includes("location") ? "error" : ""}
      />

      <label>Notes:</label>
      <input
        type="text"
        onChange={(e) => setNotes(e.target.value)}
        value={notes}
        className={emptyFields.includes("notes") ? "error" : ""}
      />

      <button>Add POI</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default POIForm;
