import React, { useContext, useEffect, useState } from "react";
import { CompContext } from "../contexts/ComponentsContext";
import Card from "../components/Card";
import { useParams, useNavigate } from "react-router-dom";

// Filter component
const Filter = () => {
  // Access cardsData from the context
  const { cardsData } = useContext(CompContext);
  const { filterType } = useParams();
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState(filterType || null);
  const [filteredCards, setFilteredCards] = useState(cardsData);

  useEffect(() => {
    setSelectedType(filterType);
    setFilteredCards(
      filterType
        ? cardsData.filter((card) => card.cardType === filterType)
        : cardsData
    );
  }, [filterType, cardsData]);

  const applyFilter = (type) => {
    if (selectedType === type) {
      setSelectedType(null);
      setFilteredCards(cardsData);
      navigate("/");
    } else {
      setSelectedType(type);
      setFilteredCards(cardsData.filter((card) => card.cardType === type));
      navigate(`/${type}`);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Card List</h1>
      <div className="flex gap-10">
        {/* Filter Buttons */}
        <div className="flex flex-col space-x-3 mb-5 ">
          {["Type A", "Type B", "Type C"].map((type) => (
            <button
              key={type}
              onClick={() => applyFilter(type)}
              className={`py-1 px-3  mb-5 rounded-lg border transition-colors duration-200 ${
                filterType === type
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {type}
            </button>
          ))}
         
        </div>

        {/* Display Filtered Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredCards.map((card, index) => (
            <Card key={index} title={card.title} cardType={card.cardType} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
