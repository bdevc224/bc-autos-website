import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;