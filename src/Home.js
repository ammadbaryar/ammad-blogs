import React, { useState } from 'react';
import Bloglist from './Bloglist'


const Home = () => {
    const [blogs , setBlogs] = useState([
        {title : "Go to Party ", description :"I'll go to party tomorrow ", id:1},
        {title : "Go to Office ", description :"I'll go to office tomorrow ", id:2},
        {title : "Go to Bazar", description :"I'll go to Bazar tomorrow ", id:3}
        
    ])
   
    return ( 
    
       <Bloglist blogs={blogs} title1= "Blogs List " setBlogs = {setBlogs}></Bloglist>

     );
}
 
export default Home;