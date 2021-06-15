import "./Book.css"

export default function Book({title, author}){
    return (
        <li>
            <p> {title} {author}</p>
            <button className="button">Add</button> 
            <button>Delete</button>
            <button>Review</button>
        </li>
    )
}
