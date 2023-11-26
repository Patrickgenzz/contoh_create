import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = [...data]; // dengan cara ini, kita tidak perlu mengubah state data secara langsung
    newData.push(user);
    setData(newData);

    /*
    setData([...data, user]); // ini juga bisa secara langsung mengubah state data
    */

    //mereset state user
    setUser({
      name: "",
      email: "",
    });
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" onChange={handleChange} />
          <input type="email" placeholder="Email" name="email" onChange={handleChange} />
          <br />
          <br />
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="card">
        <ol>
          {data.map((user, index) => (
            <li
              key={index}
              style={{
                fontWeight: "bold",
              }}
            >
              <p>
                {user.name} - {user.email}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
