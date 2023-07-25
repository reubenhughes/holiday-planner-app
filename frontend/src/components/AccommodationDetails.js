import { useEffect, useState } from "react";

const AccommodationDetails = ({ holiday, accommodationID }) => {
  const [accommodation, setAccommodation] = useState("");

  useEffect(() => {
    const fetchAccommodation = async () => {
      const response = await fetch(
        "/api/holidays/accommodation/" + accommodationID
      );
      const json = await response.json();
      if (response.ok) {
        setAccommodation(json);
      }
    };

    fetchAccommodation();
  }, []);

  const handleClick = async () => {
    holiday.accommodationList.pop(accommodationID);
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

  return (
    <div className="holiday-details">
      <h4>{accommodation.name}</h4>
      <p>
        <strong>Type: </strong>
        {accommodation.type}
      </p>
      <p>
        <strong>Check-in: </strong>
        {accommodation.checkin}
      </p>
      <p>
        <strong>Check-out: </strong>
        {accommodation.checkout}
      </p>
      <p>
        <strong>Price: </strong>£{accommodation.price}
      </p>
      <p>
        <strong>Notes: </strong>
        <i>{accommodation.notes}</i>
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default AccommodationDetails;
