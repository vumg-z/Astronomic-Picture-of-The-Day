import React from 'react';
import './App.css';
import Landing from "./components/Landing/Landing"
import Animation from "./components/Animation/Animation"
import News from "./components/News/News"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Landing/>
      <Animation/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
