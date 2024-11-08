import { toDoCard } from "../../App.tsx";
import React from "react";
import axios from "axios";

type ToDoCardProps = {
    cards: toDoCard[];
    setCards: React.Dispatch<React.SetStateAction<toDoCard[]>>;
}

export default function ToDoCard({cards, setCards}: ToDoCardProps){

    function handleDeleteCard(id: string){
        console.log(`Sending DELETE request for toDo with id: ${id}`)

        axios.delete(`/api/todo/${id}`)
            .then(() => {
                console.log(`Deleted toDo with ID: ${id}`);
                setCards(prevCards => prevCards.filter(card => card.id !== id));
                })
            .catch((error) => {
                console.error("Error deleting ToDo:", error);
                    alert("Löschen fehlgeschlagen: "+ error.message)
            });

    }

    return (
        <>

                {cards && cards.length > 0 ? (
                    cards.map((card) => (
                        <div className="toDoCard" key={card.id}>
                            <div >
                                <h3>{card.description}</h3>
                                <p className="cardId">ID: {card.id}</p>
                                <p className="cardStatus">Status: {card.status}</p>
                            </div>
                            <button className="deleteButton" onClick={()=> handleDeleteCard(card.id)}>&#10005;</button>
                        </div>
                            ))
                            ) : (
                            <p>Keine To-Dos verfügbar.</p> // Zeige alternative Nachricht an, falls `cards` leer ist
                            )}

                    </>
                    )
                }