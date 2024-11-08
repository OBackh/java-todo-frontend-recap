import ToDoCard from "../ToDoCard/ToDo-Card.tsx";
import { toDoCard } from "../../App.tsx";
import React from "react";

type ToDoCardProps = {
    cards: toDoCard[];
    setCards: React.Dispatch<React.SetStateAction<toDoCard[]>>;
}

export default function Done( {cards, setCards}: ToDoCardProps){

    const filteredCards = cards.filter(card => card.status === "DONE")

    return(
        <>
            <div className="statusContainer">
                <h2 className="headlines">Done</h2>
                <ToDoCard cards={filteredCards} setCards={setCards}/>
            </div>
        </>
    )
}