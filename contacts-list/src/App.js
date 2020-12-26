import { useState } from 'react';
import './App.css';
import data from "./data"
import List from "./List"
function App() {
  const [contacts, setContacts] = useState(data);

  return (
    <div className="App">
      <div className="container">
        <h3>You have {contacts.length} contacts</h3>
        <List contacts={contacts} />
        <button onClick={() => console.log('clicked')}>Clear List</button>

      </div>
    </div>
  );
}

export default App;
