import "./Book.css"

export default function Book(title, author){
    return (
        <li>
           {/* //Title
           //Author
           //Add Button
           //Delete Button
           //Review Button */}
            <p>Title</p>
            <p>Author</p>
            <button className="button">Add</button> 
            <button>Delete</button>
            <button>Review</button>
        </li>
    )
}
