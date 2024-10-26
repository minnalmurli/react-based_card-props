import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./App.css";

const cardData = [
  {
    id: 1,
    title: "Card 1",
    description: "This is card 1 description",
    imageUrl: "assets/img1.jpg",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is card 2 description",
    imageUrl: "assets/img2.jpg",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is card 3 description",
    imageUrl: "assets/img3.jpg",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is card 4 description",
    imageUrl: "assets/img4.jpg",
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is card 5 description",
    imageUrl: "assets/img5.jpg",
  },
  {
    id: 6,
    title: "Card 6",
    description: "This is card 6 description",
    imageUrl: "assets/img6.jpg",
  },
  {
    id: 7,
    title: "Card 7",
    description: "This is card 7 description",
    imageUrl: "assets/img7.jpg",
  },
  {
    id: 8,
    title: "Card 8",
    description: "This is card 8 description",
    imageUrl: "assets/img8.jpg",
  },
  {
    id: 9,
    title: "Card 9",
    description: "This is card 9 description",
    imageUrl: "assets/img9.jpg",
  },
  {
    id: 10,
    title: "Card 10",
    description: "This is card 10 description",
    imageUrl: "assets/img10.jpg",
  },
  {
    id: 11,
    title: "Card 11",
    description: "This is card 11 description",
    imageUrl: "assets/img11.jpg",
  },
  {
    id: 12,
    title: "Card 12",
    description: "This is card 12 description",
    imageUrl: "assets/img12.jpg",
  },
];

// Array of gradients to cycle through
const gradients = [
  "linear-gradient(to right, #ff0000, #0000ff)",
  "linear-gradient(to right, #00ff00, #ff00ff)",
  "linear-gradient(to right, #ffff00, #00ffff)",
  "linear-gradient(to right, #ff7f50, #1e90ff)",
  "linear-gradient(to right, #ff1493, #00bfff)",
  "linear-gradient(to right, #8a2be2, #da70d6)",
];

function App() {
  const [currentGradient, setCurrentGradient] = useState(gradients[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGradient((prevGradient) => {
        // Get the next gradient in the array, or loop back to the first one
        const currentIndex = gradients.indexOf(prevGradient);
        const nextIndex = (currentIndex + 1) % gradients.length;
        return gradients[nextIndex];
      });
    }, 3000); // Change the gradient every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="app">
      <h1>All the cards are here.</h1>
      <div className="card-container">
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            gradient={currentGradient}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
