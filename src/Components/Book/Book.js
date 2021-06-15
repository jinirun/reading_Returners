import "./Book.css"

export default function Book({title, author}){
    return (
        
            <tr>
                <td> { title } </td>
                <td> { author } </td> 
                <td> <button className="button">Add</button> 
                 <button className="button">Delete</button> 
                 <button className="button">Review</button> </td>
            </tr>
        // <li className="book--list">
        //     {title}
        //     {author}
        //     <button className="button">Add</button> 
        //     <button className="button">Delete</button>
        //     <button className="button">Review</button>
        // </li>
    )
}
