import React, { useState } from "react";
import Innercomponent from "./Innercomponent";
import "./LoginPage.css";
function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database =[
    {
      "id": 1,
      "username": "amar",
      "password": "amar123"
    },
    {
      "id": 2,
      "username": "akbar",
      "password": "akbar123"
    },
    {
      "id": 3,
      "username": "antony",
      "password": "antony123"
    },
    {
      "id": 4,
      "username": "john",
      "password": "john123"
    },
    {
      "id": 5,
      "username": "paul",
      "password": "paul123"
    }
  ] ;

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form1">
      <form onSubmit={handleSubmit} className="form">
        <div className="input-container">
          <label >Username </label>
          <input type="text" name="uname" required className="inp1"/>
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required className="inp2" />
          {renderErrorMessage("pass")}
        </div>
        <button classname="btn"type="submit" class="btn btn-primary">Log In</button>
        <hr></hr>
        <img className="robo" src="https://cdn3.iconfinder.com/data/icons/vector-robots-set-concept-in-blue-color-style/1772/robo_advisor_robot_assistant_chatbot-512.png" alt="img" />
      </form>
    </div>
  );
  
  return (
    <div className="app">
      <div className="login-form">
        <div className="title"></div>
        {isSubmitted ?<Innercomponent/>: renderForm}
      </div>
    </div>
  );
}

export default App;