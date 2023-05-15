import { PuppyCard } from "./PuppyCard"
import { useContext } from "react";
import './Puppies.css';
import { AddPuppy } from "./AddPuppy";
import { PuppiesContext } from "../PuppiesContext";

export const Puppies = () => {
  const {puppies} = useContext(PuppiesContext);

  return (
    <div className="puppies">
      { puppies.length > 0 && (
      <>
        {puppies.map((puppy) => (
          <PuppyCard puppyInfo={puppy} key={puppy.id}/>
        ))}
        <AddPuppy  />
      </>
      )}
    </div>
  )
}
