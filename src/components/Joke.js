import React, { useEffect, useState } from "react";
import { Rating } from "semantic-ui-react";
import { Item } from "semantic-ui-react";

const Joke = ({ joke, collectRating }) => {
  const [rate, setRate] = useState(0);
  const [emoji, setEmoji] = useState("");

  const handleRate = (e, { rating }) => {
    setRate(rating);
    collectRating(rating);
  };

  // jak ocena siÄ zmienia, otrzymujemy emoji
  useEffect(() => {
    getEmoji();
  }, [rate]);

  const getEmoji = () => {
    switch (rate) {
      case 1:
        setEmoji("ð");
        break;
      case 2:
        setEmoji("ð");
        break;
      case 3:
        setEmoji("ð");
        break;
      case 4:
        setEmoji("ð");
        break;
      case 5:
        setEmoji("ð");
        break;
      default:
        setEmoji("");
    }
  };

  return (
    <Item>
      <Item.Content content={joke}></Item.Content>
      <Item.Description content={emoji} />
      <Rating
        icon="star"
        defaultRating={0}
        maxRating={5}
        size="huge"
        onRate={handleRate}
        disabled={rate > 0}
      />
    </Item>
  );
};

export default Joke;
