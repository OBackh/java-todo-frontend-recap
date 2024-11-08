import ToDoCard from "./ToDo-Card.tsx";

export default function Done(){
    return(
        <>
            <div className="statusContainer">
                <h2 className="headlines">Done</h2>
                <ToDoCard/>
            </div>
        </>
    )
}