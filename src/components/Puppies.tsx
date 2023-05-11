import { PuppyCard } from "./PuppyCard"
import { useEffect, useState } from "react";
import { Puppy } from "./types";
import { fetchAllPuppies, fetchPuppyById, fetchPuppyPhotoByBreed } from "./tools";
import './Puppies.css';
import { AddPuppy } from "./AddPuppy";

export const Puppies = () => {
  const [puppies, setPuppy] = useState({} as Puppy[]);

  useEffect(() => {
    fetchAllPuppies() 
    .then((newPuppies) => setPuppy(newPuppies))
    .catch((error) => console.log(error));
  }, []);

  return (
    <div className="puppies">
      { puppies.length > 0 && (
      <>
        <PuppyCard puppyInfo={puppies[0]} />
        <PuppyCard puppyInfo={puppies[1]} />
        <PuppyCard puppyInfo={puppies[2]} />
        <AddPuppy />
      </>
      )}
    </div>
  )
}
