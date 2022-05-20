import React, { useState, useEffect } from "react";

function AverageMood({ ratedJokes }) {
  const [emoji, setEmoji] = useState("🤔");

  // szukamy srednia ocene
  const averageMood = ratedJokes.reduce((acc, el) => acc + el, 0) / ratedJokes.length;

  useEffect(() => {
    calculateMood();
  }, [averageMood]);

  const calculateMood = () => {
    switch (Math.round(averageMood)) {
      case 1:
        setEmoji("😞");
        break;
      case 2:
        setEmoji("😕");
        break;
      case 3:
        setEmoji("😐");
        break;
      case 4:
        setEmoji("😁");
        break;
      case 5:
        setEmoji("😂");
        break;
      default:
        setEmoji("🤔");
    }
  };

  return (
    <div className="average">
      <h4>Average mood:</h4>
      <span>{emoji}</span>
    </div>
  );
}

export default AverageMood;
