import ToDoCard from "./ToDo-Card.tsx";

export default function Backlog(){
    return(
        <>
            <div className="statusContainer">
                <h2 className="headlines">Ich bin das Backlog!</h2>
                <ToDoCard/>
                <ToDoCard/>
            </div>

        </>
    )
}