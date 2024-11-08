import { createContext } from "react";
import { v4 as uuid } from "uuid";

// Create context
export const CompContext = createContext();

// Context provider
const CompContextProvider = (props) => {
  // Sample array of cards with different types
  const cardsData = [
    { title: "Card 1", cardType: "Type A" },
    { title: "Card 2", cardType: "Type B" },
    { title: "Card 3", cardType: "Type A" },
    { title: "Card 4", cardType: "Type C" },
  ];

  return (
    <CompContext.Provider value={{ cardsData }}>
      {props.children}
    </CompContext.Provider>
  );
};

export default CompContextProvider;
