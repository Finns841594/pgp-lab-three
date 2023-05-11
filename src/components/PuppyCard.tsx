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
    line1: "Hi! My name is " + puppyInfo.name + ". ",
    line2: "I'm a " + puppyInfo.breed + ". ",
    line3: "I was born on " + puppyInfo.birthdate + ". ",
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
        <ClickEditableText text={PuppyDescribe.line1} tagType="h3" />
        <ClickEditableText text={PuppyDescribe.line2} tagType="p" />
        <ClickEditableText text={PuppyDescribe.line3} tagType="p" />
      </div>
    </div>
  );
};