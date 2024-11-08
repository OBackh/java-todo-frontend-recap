import ToDoCard from "./ToDo-Card.tsx";

type BacklogProps = {
    cards: toDoCard[];
}

export default function Backlog( {cards}: BacklogProps){
    return(
        <>
            <div className="statusContainer">
                <h2 className="headlines">Backlog</h2>
                <div>
                    {cards.map(card => (
                        <div key={card.id}>
                            <h2>{card.description}</h2>
                            <p>{card.status}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}