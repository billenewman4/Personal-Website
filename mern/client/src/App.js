
import './App.css';
import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import React from 'react';



function App(props) {
  return (
    <>
      <main className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <Navbar />
        <HomeContent />
      </main>
    </>
  );
}


export default App;
