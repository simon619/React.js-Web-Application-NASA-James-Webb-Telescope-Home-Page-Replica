import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('')
    const [date, setDate] = useState(new Date());
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = {title, body, author, date};
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newBlog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <button className="b1"><Link to="/"><span>Back</span></Link></button>
            <h2>What On Your Mind !</h2>
            <form onSubmit= { handleSubmit }>
                <label>Title:</label>
                    <textarea 
                        type="text"
                        required
                        value={ title }
                        onChange = { (e) => setTitle(e.target.value) }
                    />
                <label>Body:</label> 
                    <textarea
                        type="text"
                        required
                        value={ body }
                        onChange = { (e) => setBody(e.target.value) }
                    >
                    </textarea>
                <label>Your Name:</label>
                    <input 
                        type="text"
                        placeholder="             Enter Name Please"
                        required
                        value={ author }
                        onChange = { (e) => setAuthor(e.target.value) }
                    />
                <label>Date:</label>
                <input 
                    type="date" 
                    value={ date }
                    onChange = {(e) => setDate(e.target.value)}
                ></input>

                {!isPending && <button className="b2"><span>Add blog</span></button>}
                {isPending && <button className="b2"><span>Adding blog.....</span></button>}
            </form>
        </div>
     );
}
 
export default Create;