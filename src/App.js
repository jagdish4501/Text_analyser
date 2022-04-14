import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';


import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#7446be';
      document.body.style.color = 'white';
      showAlert("success ", "Light Mode Off");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("success ", "Light Mode ON");
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: type,
      typ: message
    })
  }
  setTimeout(() => {
    setAlert(null);
  }, 1000);

  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About TextUtils " home="home" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Switch>
          <Route path="/about">
            <AboutUs mode={mode} />
          </Route>

          <Route path="/">
            <TextForm heading="Enter Text to Analyse" mode={mode} Alert={showAlert} />
          </Route>

          <Route path="/home">
            <TextForm heading="Enter Text to Analyse" mode={mode} Alert={showAlert} />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
