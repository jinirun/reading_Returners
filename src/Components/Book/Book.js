import "./Book.css"

export default function Book({title, author}){
    return (
        <li className="book--list">
            <div class="row">
                <div class="column">
                    {title}
                </div>
                <div class="column">
                    {author}
                </div>
                <br></br>
                <div class="column">
                    <button className="button">Add</button> 
                    <button className="button">Delete</button>
                    <button className="button">Review</button>
                </div>   
                 <br></br>     
            </div> 
        </li>
    )
}
