import { useContext, useEffect, useState } from "react";
import { Puppy } from "./types";
import { deletePuppy, fetchPuppyPhotoByBreed, updatePuppyInfo } from "./tools";
import { ClickEditableText } from "./ClickEditableText";
import { PuppiesContext } from "../PuppiesContext";

interface PuppyCardProps {puppyInfo: Puppy}

export const PuppyCard = ({puppyInfo}: PuppyCardProps) => {
  const [puppyPhotoUrl, setPuppyPhotoUrl] = useState<string | null>(null);
  const {setPuppies} = useContext(PuppiesContext);

  useEffect(() => {
    fetchPuppyPhotoByBreed(puppyInfo.breed)
    .then((url) => setPuppyPhotoUrl(url))
    .catch((error) => console.log(error));
  },[]);

  const PuppyDescribe = {
    line1: "Hi! My name is ",
    line2: "I'm a ",
    line3: "I was born on ",
  }

  const deleteHandler = () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${puppyInfo.name}?`);
    if (confirmDelete) {
      deletePuppy(puppyInfo.id!)
      .then(() => {
        setPuppies((prevPuppies) => prevPuppies.filter((puppy) => puppy.id !== puppyInfo.id));
      })
    }
  };


  return (
    <div className="puppy-card">
      <div className="puppy-card_image-block">
        { puppyPhotoUrl ? (
          <img src={puppyPhotoUrl} alt={puppyInfo.breed} className="image-block_image"/>
          ) : (
          <div className="puppy-card_image-block placeholder">
            <h3>Photo Loading</h3>
          </div>
          )}
      </div>
      <div className="puppy-card_info-block">
        <ClickEditableText uneditableText={PuppyDescribe.line1} data={puppyInfo} editableProp='name' action={updatePuppyInfo} tagType="h3" />
        <ClickEditableText uneditableText={PuppyDescribe.line2} data={puppyInfo} editableProp='breed' action={updatePuppyInfo} tagType="p" />
        <ClickEditableText uneditableText={PuppyDescribe.line3} data={puppyInfo} editableProp='birthdate' action={updatePuppyInfo} tagType="p" />
      </div>
      <div className="puppy-card_button-block">
        <button className="puppy-card-delete-button" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
};