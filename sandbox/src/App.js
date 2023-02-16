import "./styles.css";

import { useState } from "react";

export default function App() {
  const [first, setFirst] = useState("");
  const [middle, setMiddle] = useState("");
  const [last, setLast] = useState("");
  const [num, setNum] = useState("");
  const [check, setCheck] = useState(false);
  const [inputs, setInputs] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputs([
      ...inputs,
      { id: inputs.length + 1, first, middle, last, num, check, inputs }
    ]);
  };
  const listItems = inputs.map((i) => (
    <li
      key={i.id}
    >{`${i.first} - ${i.middle} - ${i.last} - ${i.num} - ${i.check}`}</li>
  ));
  return (
    <div className="App">
      <h1>Student Information</h1>
      <form>
        <label>
          First:
          <input
            name="first"
            type="text"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
        </label>
        <br />
        <label>
          Middle:
          <input
            name="middle"
            type="text"
            value={middle}
            onChange={(e) => setMiddle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last:
          <input type="text" onChange={(e) => setLast(e.target.value)} />
        </label>
        <br />
        <label>
          ID:
          <input type="number" onChange={(e) => setNum(e.target.value)} />
        </label>
        <br />
        <label>
          <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} />
        </label>
        <br />
        <button onClick={handleSubmit}>Submit </button>
      </form>
      <hr />
      {inputs.length === 0 && <div>No information submitted</div>}
      {inputs.length > 0 && (
        <div>
          <ul>{listItems}</ul>
        </div>
      )}
    </div>
  );
}
