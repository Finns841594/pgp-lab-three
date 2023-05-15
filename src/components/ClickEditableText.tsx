import { useState } from "react";
import { Puppy } from "./types";

interface Props {tagType: keyof JSX.IntrinsicElements, data: Puppy, editableProp: keyof Puppy, uneditableText: string, action: (puppyInfo:Puppy) => void}

export const ClickEditableText = ({tagType, data, editableProp, uneditableText, action}:Props) => {
  const [editting, setEditting] = useState(false);
  const [theText, setTheText] = useState(data[editableProp]);

  const Tag = tagType as keyof JSX.IntrinsicElements;

  const clickHandler = () => {
    if (editting) {
      const newText = document.querySelector('input[id="textContent"]') as HTMLInputElement;
      if (newText) {
        setTheText(newText.value)
        // data[editableProp] = newText.value; // why this doesn't work?
        if (editableProp === 'name') {
          data.name = newText.value;
        } else if (editableProp === 'breed') {
          data.breed = newText.value;
        } else if (editableProp === 'birthdate') {
          data.birthdate = newText.value;
        }
        console.log(data);
        action(data);
      };
      }
      setEditting(!editting);
  }

  return (
    <>
    { editting ? (
      <div className="usercard_name_edit_area">
        <Tag>{uneditableText}</Tag><input type="text" id="textContent" defaultValue={data[editableProp]}></input>
        <input type="button" value="Confirm" onClick={clickHandler}></input>
      </div>
    ) : (
      <Tag onClick={clickHandler}>{uneditableText} {theText}</Tag>
    )}
    </>
  )
}
