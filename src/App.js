
import { useState } from 'react';
import Home from './sections/home';

function App() {
  const[view,setView]=useState(false)
  
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
