import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
    
    const { id } = useParams();
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        })
    }
    
    return ( 
        <div className="b-detail">
            <button className="b1"><Link to="/"><span>Back</span></Link></button>
            { isPending && <p>Loading..........</p> }
            { error && <p>Can Not Load Data</p> }
            { blog && (<article>
                <div className="underlining">
                    <h2>{blog.title}<br/><span>{blog.date}</span></h2>
                    <p>Written By {blog.author}</p>
                </div>
                <div>{blog.body}</div>
                <button className="b2" onClick={handleClick}><span>Delete</span></button>
            </article>)}
        </div>
     );
}
 
export default BlogDetail;