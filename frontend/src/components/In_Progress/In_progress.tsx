import ToDoCard from "../../components/ToDoCard/ToDo-Card.tsx";
import { toDoCard } from "../../App.tsx";
import React from "react";

type ToDoCardProps = {
    cards: toDoCard[];
    setCards: React.Dispatch<React.SetStateAction<toDoCard[]>>;
}

export default function In_progress( {cards, setCards}: ToDoCardProps){

    const filteredCards = cards.filter(card => card.status === "IN_PROGRESS")

    return(
        <>
            <div className="statusContainer">
                <h2 className="headlines">IN PROGRESS</h2>
                <ToDoCard cards={filteredCards} setCards={setCards}/>
            </div>
        </>
    )
}