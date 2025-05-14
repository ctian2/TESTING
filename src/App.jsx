import React from 'react';
import './App.css'; // import from app.css

const App = () => {
  return (
    <div>
      
    <div style={{
        backgroundImage: "url('/bck.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
    }}
        >
        <h2 style={{ position: 'absolute', top: '10px', left: '10px' }}>
        Hello my name
        </h2>
        </div>

      
      <nav className="top-right-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/callme">Call Me</a></li>
        </ul>
      </nav>
    </div>
  
    
    
  )
}

export default App;