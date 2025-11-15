// src/components/App.jsx
import { useEffect, useState } from "react";
import Header from "./Header";
import ToyContainer from "./ToyContainer.jsx";
import ToyForm from "./ToyForm";

const TOYS_URL = "http://localhost:3001/toys";

export default function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch(TOYS_URL)
      .then((r) => r.json())
      .then((data) => setToys(data));
  }, []);

  function handleAddToy(newToy) {
    setToys((prev) => [...prev, newToy]);
  }

  function handleLikeToy(updatedToy) {
    setToys((prev) =>
      prev.map((toy) => (toy.id === updatedToy.id ? updatedToy : toy))
    );
  }

  function handleDonateToy(id) {
    setToys((prev) => prev.filter((toy) => toy.id !== id));
  }

  function handleToggleForm() {
    setShowForm((prev) => !prev);
  }

  return (
    <>
      <Header />
      {/* 👇 This is the button the tests are looking for */}
      <button id="new-toy-btn" onClick={handleToggleForm}>
        Add a Toy
      </button>

      {showForm && <ToyForm onAddToy={handleAddToy} />}

      <ToyContainer
        toys={toys}
        onLikeToy={handleLikeToy}
        onDonateToy={handleDonateToy}
      />
    </>
  );
}
 