import { useState, useEffect } from 'react';
import './App.css';
import {database} from "./firebase-config"
import {collection, getDocs} from "firebase/firestore"

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(database, "users");

  // ez akkor fut le ha betölt az oldal
  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data, id: doc.id })));
      //console.log(data)
      console.log(users);
    };

    getUsers();
  }, [])


  return (
    <div className="App">
      { users.map((user) => {
        return (
          <div>
            <h1>{user.id}</h1>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
