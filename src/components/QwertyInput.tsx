import { useState } from "react";
import WordDescription from "./WordDescription";

function QwertyInput(): JSX.Element {
  const [text, setText] = useState("");

  const addLetter = (letter: string) => {
    setText(text + letter);
    // better: setText(prev => prev + letter);
  };

  const handleBackspace = () => {
    const textMinusLast = text.slice(0, text.length - 1);
    setText(textMinusLast);
    // better:
    // setText(prev => {
    //   const prevMinusLast = prev.slice(0, prev.length - 1)
    //   return prevMinusLast
    // })
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => addLetter("Q")}>Q</button>
      <button onClick={() => addLetter("W")}>W</button>
      <button onClick={() => addLetter("e")}>e</button>
      <button onClick={() => addLetter("r")}>r</button>
      <button onClick={() => addLetter("T")}>T</button>
      <button onClick={() => addLetter("Y")}>Y</button>
      <button onClick={() => addLetter("U")}>U</button>
      <button onClick={() => addLetter("I")}>I</button>
      <button onClick={() => addLetter("O")}>O</button>
      <button onClick={() => addLetter("P")}>P</button>
      <button onClick={() => addLetter("!")}>!</button>
      <button onClick={() => addLetter("?")}>?</button>
      <button onClick={() => addLetter("£")}>£</button>
      <br />
      <button onClick={handleBackspace}>Backspace</button>
      <button onClick={() => setText("")}>Clear all</button>
      <WordDescription wordToDescribe={text} />
    </>
  );
}

export default QwertyInput;
