const Bloglist = ({blogs, title1 , setBlogs}) => {
   const handleDelete = (id) =>{
  const newBlogs = blogs.filter( blog=> blog.id !== id);
  setBlogs(newBlogs)

   }


    return ( 
        <div className="blogs-list">
            <h1>{title1}</h1>

        {blogs.map((blog)=>
        
        <div className="blogs" key = {blog.id}>
             <h2>{blog.title}</h2>
             <p>{blog.description}</p>
           <button className="delete-btn" onClick= { ()=> handleDelete(blog.id)}>Delete Blog</button>
        </div>
            
        )}
       
   
</div>
     );
}
 
export default Bloglist;