import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    return ( 
        <div className="blog-list">
            <h1>{ title }</h1>
            { blogs.map((i) => (
                <div className="blog-preview" key={ i.id }>
                    <Link to={`/blogs/${i.id}`}>
                        <h2>Title: { i.title }</h2>
                        <p>Author: {i.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;