import { Dispatch, SetStateAction, createContext } from "react";
import { Puppy } from "./components/types";

interface PuppiesInfoContextProp {
  puppies: Puppy[];
  setPuppies: Dispatch<SetStateAction<Puppy[]>>;
}

export const PuppiesContext = createContext<PuppiesInfoContextProp>({
  puppies: [],
  setPuppies: () => {},
});