import { useState } from "react";

interface Props {tagType: keyof JSX.IntrinsicElements, text: string}

export const ClickEditableText = ({tagType, text}:Props) => {
  const [editting, setEditting] = useState(false);
  const [theText, setTheText] = useState(text);

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
        <input type="text" id="textContent" defaultValue={text}></input>
        <input type="button" value="Confirm" onClick={clickHandler}></input>
      </div>
    ) : (
      <Tag onClick={clickHandler}>{theText}</Tag>
    )}
    </>
  )
}
