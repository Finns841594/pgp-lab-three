import { useEffect, useState } from "react";
import { Puppy } from "./types";
import { fetchPuppyPhotoByBreed } from "./tools";
import { ClickEditableText } from "./ClickEditableText";

interface PuppyCardProps {puppyInfo: Puppy}

export const PuppyCard = ({puppyInfo}: PuppyCardProps) => {
  const [puppyPhotoUrl, setPuppyPhotoUrl] = useState<string | null>(null);

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
        <ClickEditableText uneditableText={PuppyDescribe.line1} editableText={puppyInfo.name} tagType="h3" />
        <ClickEditableText uneditableText={PuppyDescribe.line2} editableText={puppyInfo.breed} tagType="p" />
        <ClickEditableText uneditableText={PuppyDescribe.line3} editableText={puppyInfo.birthdate} tagType="p" />
      </div>
    </div>
  );
};