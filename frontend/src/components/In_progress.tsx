import ToDoCard from "./ToDo-Card.tsx";

export default function In_progress(){
    return(
        <>
            <div className="statusContainer">
                <h2 className="headlines">Ich bin IN_PROGRESS!</h2>
                <ToDoCard/>
            </div>
        </>)
}