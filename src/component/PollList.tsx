import React, { useState } from "react";

const PollList = () => {
  const [items, setItems] = useState("");
  const [pollItemsList, setPollItemsList] = useState([]);
  const handleEvent = (event: any) => {
    setItems(event.target.value);
  };
  const handleAddPolls = () => {
    setPollItemsList( (prevItems) => {
        return [...prevItems  , items];
    })
    setItems("");
  };
  console.log(pollItemsList);

  return (
    <>
      <h1>POLL LIST</h1>
      <br /> <br />
      <div>
        <input value={items} placeholder=" Add a poll" onChange={handleEvent} />
        <button onClick={handleAddPolls}> + </button>
      </div>
      {pollItemsList.map((poll) => {
        return <li>{poll}</li>;
      })}
    </>
  );
};
export default PollList;
