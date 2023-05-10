import { useEffect, useState } from "react";
import { Puppy } from "./types";
import { fetchPuppyById } from "./tools";

export const PuppyCard = () => {
  const [puppy, setPuppy] = useState({} as Puppy);

  useEffect(() => {
    fetchPuppyById(1).then((puppy) => setPuppy(puppy));
  }, []);

  return (
    <div className="puppy-card">
      <h2>Hi, I'm a puppy card</h2>
      { puppy.name && <h3>My name is {puppy.name}</h3>}
    </div>
  );
};