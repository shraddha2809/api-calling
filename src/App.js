import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import axios from "axios";



const App = ()=> {

  const [users, setUser] = useState([]);

  const fetchUsers = async () => {
    try{
      const userData = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log("userData;", userData.data)
       setUser(userData.data)
    }
    catch(err){
       console.log("error",err)
    }
  }
  return (
    <div className="App">
     <h1>users</h1>
     <button onClick={()=>fetchUsers()}>Fetch Users</button>
     {/* <h1>{users.length !== 0 ? <p>{users[0].name}</p>:"no data"}</h1> */}
     {
       users.map((item)=>{
         return (
         <div className="databox">
           <p>{item.name}</p>
           <p>{item.username}</p>
           <p>{item.phone}</p>
           <p>{item.email}</p>
           <p>{item.website}</p>

           {/* <table> */}
  {/* <tr>
    <th>Name</th>
    <th>Username</th>
    <th>Phone no.</th>
    <th>Eamil</th>
    <th>Website</th>
  </tr>
  <tr>
    <td>{item.name}</td>
    <td>{item.username}</td>
    <td>{item.phone}</td>
    <td>{item.email}</td>
    <td>{item.website}</td>
  </tr>
  
// </table> */}
         </div>
          )
       })
     }
    </div>
  );
}

export default App;
