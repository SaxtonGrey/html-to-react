import { React } from "react";
import "./App.css";
import FmaCharacters from "./FmaCharacters";
import CharacterRatings from "./character-ratings";
import FmaHeader from "./header";

function App() {
  return (
    <>
      <FmaHeader />
      <CharacterRatings />
      <FmaCharacters />
    </>
  );
}

export default App;
