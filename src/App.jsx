import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

import "./App.css";

function App() {
  const [newQeyd, setNewQeyd] = useState("");
  const [qeydler, setQeydler] = useState([]);

  function addQeyd() {
    if (!newQeyd) {
      alert("Qeydlerinizi yazın ");
      return;
    }
    const qeyd = {
      id: Math.floor(Math.random() * 1000),
      value: newQeyd,
    };
    console.log(qeyd);
    setQeydler((oldQeydler) => [...oldQeydler, qeyd]);
    setNewQeyd("");
  }
  function deleteQeyd(id) {
    const newArrey = qeydler.filter((qeyd) => qeyd.id !== id);
    setQeydler(newArrey);
  }
  return (
    <>
     <div className="container"id="mainly">
     <h1>Qeydlər</h1>

<input
  type="text"
  placeholder="Bir qeyd daxil edin"
  value={newQeyd}
  onChange={(e) => setNewQeyd(e.target.value)}
  class="input-group-sm mb-3"
  //  onKeyDown={addQeyd}
/>
<button className="btn btn-danger" onClick={() => addQeyd()}>Göndər</button>

<ul>
  {qeydler.map((qeyd) => {
    return (
      <li key={qeyd.id}>
        {qeyd.value}{" "}
        <button className="btn btn-danger" onClick={() => deleteQeyd(qeyd.id)} >X</button>
      </li>
    );
  })}
</ul>
     </div>
    </>
  );
}

export default App;
