import ToDoCard from "../../components/ToDoCard/ToDo-Card.tsx";
import { toDoCard } from "../../App.tsx";
import React from "react";

type LaneProps = {
    cards: toDoCard[];
    setCards: React.Dispatch<React.SetStateAction<toDoCard[]>>;
    name: string
}

export default function Lane({cards, setCards, name}: LaneProps){

    const filteredCards = cards.filter(card => card.status === name)
    console.log(`Filtered cards for ${name}:`, filteredCards);

    return(
        <>
            <div className="statusContainer">
                <h2 className="headlines">{name}</h2>
                <ToDoCard cards={filteredCards} setCards={setCards} />
            </div>
        </>
    )
}