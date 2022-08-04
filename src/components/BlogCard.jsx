import { onValue, ref } from "firebase/database";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { db } from "../helpers/firebase";
import BlogForm from "./BlogForm";

const BlogCard = () => {

    const [blogAllInfo, setBlogAllInfo] = useState([]);
    const currentUser = useContext(AuthContext);
    




    useEffect(() => {
        try {
            onValue(ref(db), (snapshot) => {
                setBlogAllInfo([]);
                const data = snapshot.val();
                if (data !== null) {
                    Object.values(data).map((singleBlog) => {
                        return setBlogAllInfo((initialEmptyArray) => [
                            ...initialEmptyArray,
                            singleBlog,
                        ]);
                    });
                }
            });
        } catch (error) {
            console.error(error.message);
        }
    }, []);
// console.log(blogAllInfo);


    return ( 
        
        <div className="blogcard grid sm:grid-cols-2 lg:grid-cols-4 gap-10 " >
            { blogAllInfo?.map((item) => {
                // console.log(item.heart);
                return <BlogForm 
                id={item.id}
                authorEmail={ item.authorEmail } 
                newBlogTitle={ item.newBlogTitle } 
                newBlogImgUrl={ item.newBlogImgUrl }
                newBlogContent={ item.newBlogContent }
                newBlogCreateTime={ item.newBlogCreateTime }
                key={item.id}
                heart={item.heart}
                
                /> 
            }) }
           
        </div>
     );
}
 
export default BlogCard;