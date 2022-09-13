import React, { useState } from "react";
import { BiTaskX } from 'react-icons/bi';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <div className="app">
      <div className="container">
        <h1><BiTaskX />Today's Practices</h1>
        <form >
          <div className="form-input">
            <AiOutlinePlus className='icon' />
            <input placeholder='Enter todays practice goals'
              type="text" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
