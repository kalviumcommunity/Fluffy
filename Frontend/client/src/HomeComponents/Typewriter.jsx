import React, { useEffect, useState } from "react";

function Typewriter() {
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState(""); // Add text state variable here
  const dataText = [
    "Adopt a Snuggler! .",
    "Food for Bottomless Pits .",
    "Destroy This, Not Your Furniture .",
    "Lost Your Escape Artist? We are on it . ",
  ];

  useEffect(() => {
    const typeWriter = (text, i, fnCallback) => {
      if (i < text.length) {
        const newText = text.substring(0, i + 1);
        setText(newText);
        setTimeout(() => {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      } else if (typeof fnCallback === "function") {
        setTimeout(fnCallback, 700);
      }
    };

    const startTextAnimation = (index) => {
      if (typeof dataText[index] === "undefined") {
        setTimeout(() => {
          startTextAnimation(0);
        }, 5000);
        return;
      }

      typeWriter(dataText[index], 0, () => {
        startTextAnimation(index + 1);
      });
    };

    startTextAnimation(textIndex);

    return () => {
      // Cleanup function here if necessary
    };
  }, [textIndex]);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}

export default Typewriter;
