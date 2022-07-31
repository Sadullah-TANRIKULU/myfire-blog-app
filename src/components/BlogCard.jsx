import BlogForm from "./BlogForm";

const BlogCard = () => {
    return ( 
        
        <div className="blogcard grid sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
            <BlogForm />
            <BlogForm />
            <BlogForm />
            <BlogForm />
            <BlogForm />
            <BlogForm />
            <BlogForm />
            <BlogForm />
            <BlogForm />
            <BlogForm />
            <BlogForm />
        </div>
     );
}
 
export default BlogCard;