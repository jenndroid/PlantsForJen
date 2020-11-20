import React, { useEffect, useState } from "react";
import "./App.css";
import PlantList from "./components/PlantList";
import PlantForm from "./components/PlantForm";

function App() {
  //at app level, courses is set to nothing initially
  const [plants, setPlants] = useState([]);

  //we need to load all the courses by looking at all the records in the table,
  //fetch req on line 14
  //pass that into setCourse
  const loadPlants = async () => {
    try {
      const res = await fetch("/api/Plants");
      const plants = await res.json();
      setPlants(plants);
      console.log(plants);
    } catch (error) {
      console.error(error);
    }
  };

  //useEffect with no dependencies run loadCourses every time this page loads
  useEffect(() => {
    loadPlants();
  }, []);
  return (
    <div className="container mt-5">
      <h1 className="mb-5 text-center">Plant wishlist</h1>
      {/* the fetch request to get all course records is  passed as a prop to courseForm and renamed */}
      <PlantForm plantAdded={loadPlants} />
      <PlantList plants={plants} refreshPlants={loadPlants} />
    </div>
  );
}

export default App;
