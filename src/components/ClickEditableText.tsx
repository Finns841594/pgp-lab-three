import { useState } from "react";

interface Props {tagType: string, text: string, updateText: (text: string) => void}

export const ClickEditableText = ({tagType, text, updateText}:Props) => {
  const [editting, setEditting] = useState(false);
  const [theText, setTheText] = useState(text);

  const clickHandler = () => {
    if (editting) {
      const newText = document.querySelector('input[id="textContent"]') as HTMLInputElement;
      if (newText) {
        setTheText(newText.value)
      };
      }
      setEditting(!editting);
  }

  return (
    <>
    { editting ? (
      <div className="usercard_name_edit_area">
        <input type="text" id="textContent" defaultValue={text}></input>
        <input type="button" value="Confirm" onClick={clickHandler}></input>
      </div>
    ) : (
      <h3 onClick={clickHandler}>{theText}</h3>
    )}
    </>
  )
}
