export function CreateTodo() {
    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title"></input><br></br>
        <input style={{
                padding: 10,
                margin: 10
        }} type="text" placeholder="description"></input>

        <button>Add a todo</button>
    </div>
}


