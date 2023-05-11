import { useState } from "react";
import { addPuppy } from "./tools";
import { Puppy } from "./types";

export const AddPuppy = () => {
  const [newPuppy, setNewPuppy] = useState({} as Puppy);

  const addPuppyHandler = () => {
    // Get the input fields
    const newPuppyName = document.getElementById("newPuppyName") as HTMLInputElement;
    const newPuppyBreed = document.getElementById("newPuppyBreed") as HTMLInputElement;
    const newPuppyBirth = document.getElementById("newPuppyBirth") as HTMLInputElement;

    // Check if the input fields are not empty
    if (newPuppyName.value && newPuppyBreed.value && newPuppyBirth.value) {
      const newPuppy = {
        name: newPuppyName.value,
        breed: newPuppyBreed.value,
        birthdate: newPuppyBirth.value
      };
      console.log('Added locally: ', newPuppy);
      
      // Set the input fields to empty
      newPuppyName.value = "";
      newPuppyBreed.value = "";
      newPuppyBirth.value = "";

      // Post request to the server
      addPuppy(newPuppy).then((response) => {
        console.log('Added to the server: ', response);
        setNewPuppy(response);
      });
    }
    return null;
  };

  return (
    <div className="puppy-card">
      <div className="puppy-card_image-block">
        <div className="puppy-card_image-block placeholder">
        </div>
      </div>
      <div className="puppy-card_info-block">
        <h3>Add a puppy</h3>
        <input type="text" id="newPuppyName" placeholder="Name..." className="input-area"/>
        <input type="text" id="newPuppyBreed" placeholder="Breed..." className="input-area"/>
        <input type="text" id="newPuppyBirth" placeholder="Born..." className="input-area"/>
        <input type="submit" value="Add" className="input-area" onClick={addPuppyHandler}/>
      </div>
    </div>
  );
};