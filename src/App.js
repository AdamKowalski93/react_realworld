import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./components/SignIn/SignIn"

function App() {
  return (
      <html>
      <head>
        <title>Bootstrap Example</title>
        </head>
    <body>
    <div className='App'>
        <Navbar/>
        <SignIn/>
    </div>
    </body>
</html>
  );
}

export default App;
