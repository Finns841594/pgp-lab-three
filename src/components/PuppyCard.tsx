import { useEffect, useState } from "react";
import { Puppy } from "./types";
import { fetchPuppyById, fetchPuppyPhotoByBreed } from "./tools";

interface PuppyCardProps {puppyInfo: Puppy}

export const PuppyCard = ({puppyInfo}: PuppyCardProps) => {
  const [puppyPhotoUrl, setPuppyPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    fetchPuppyPhotoByBreed(puppyInfo.breed)
    .then((url) => setPuppyPhotoUrl(url))
    .catch((error) => console.log(error));
  }, []);

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
        <h3>Hi, I'm {puppyInfo.name}</h3>
        <p>I'm a {puppyInfo.breed}</p>
        <p>I was born on {puppyInfo.birthdate}</p>
      </div>
    </div>
  );
};