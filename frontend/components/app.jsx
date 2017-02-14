import React from 'react';
import NavContainer from './nav_container';

const App = ({children}) => {
  return (
    <div>
      <h1>HellYesCupid</h1>
      <NavContainer />
      {children}
    </div>
  )
}

export default App;
