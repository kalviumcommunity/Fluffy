import React, { useEffect, useState } from "react";

function Typewriter() {
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState(""); // Add text state variable here
  const dataText = [
    "Find your furever friend!",
    "Fuel happy tails with nutritious food!",
    "Unleash the fun with exciting toys!",
    "Lost pet? We'll help you reunite!",
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
        setTimeout(fnCallback, 1000);
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
        clearInterval()
    };
  }, [textIndex]);

  return (
    <div>
      <h1
        style={{
          fontSize: "2.8em",
          height: "5vh",
          color: "red",
          textDecoration:"underline",
          fontFamily:"monospace"
        }}
      >
        {text}
      </h1>
    </div>
  );
}

export default Typewriter;
