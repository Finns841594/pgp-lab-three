import { useState } from "react";

interface Props {tagType: keyof JSX.IntrinsicElements, editableText: string, uneditableText: string}

export const ClickEditableText = ({tagType, editableText, uneditableText}:Props) => {
  const [editting, setEditting] = useState(false);
  const [theText, setTheText] = useState(editableText);

  const Tag = tagType as keyof JSX.IntrinsicElements;

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
        <Tag>{uneditableText}</Tag><input type="text" id="textContent" defaultValue={editableText}></input>
        <input type="button" value="Confirm" onClick={clickHandler}></input>
      </div>
    ) : (
      <Tag onClick={clickHandler}>{uneditableText} {theText}</Tag>
    )}
    </>
  )
}
