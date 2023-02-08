import React from "react";
import "./App.css";
import { useState } from "react";
import { NameAtt } from "./NameAtt";

function App() {

  const [tableName, setTableName] = useState([]);
  const [name, setName] = useState("");

  const currentDateTime = new Date();
  let curDate = `${currentDateTime.getDate()}/${currentDateTime.getMonth()+1}/${currentDateTime.getFullYear()}`;
  let curTime = currentDateTime.getHours() + ':' + currentDateTime.getMinutes() + ':' + currentDateTime.getSeconds();

  const handleSubmitForm = () => {
    const submitForm = {
      id: tableName.length === 0 ? 1 : tableName[tableName.length - 1].id + 1,
      tablename: name,
      date: curDate,
      time: curTime,
    };
    setTableName([...tableName, submitForm]);
  };

  const onChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  return(
    <div className="App">
        <label>Enter OJT Name: <br/>
          <select onChange={onChange}>
            <option selected defaultValue disabled>NEUST OJT NAME</option>
            <option value="Rinand">Rinand</option>
            <option value="Jed">Jed</option>
            <option value="Ezeriel">Ezeriel</option>
            <option value="Daniel">Daniel</option>
            <option value="Jhonas">Jhonas</option>
          </select>
        </label><br/><br/>
        <label>Date<br/>
          <input type="text" value={curDate} readOnly/>
        </label><br/><br/>
        <label>Time<br/>
          <input type="text" value={curTime} readOnly/>
        </label><br/><br/>
        <button onClick={handleSubmitForm}>Submit Attendance</button>
      <br/>
      <div className="container">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>OJT Name</th>
                    <th>Date</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
              {tableName.map((submitForm) => {
                return (<NameAtt id={submitForm.id} tablename={submitForm.tablename} date={submitForm.date} time={submitForm.time}/>);
              })}
            </tbody>
        </table>
      </div>



    </div>
  );
};

export default App;