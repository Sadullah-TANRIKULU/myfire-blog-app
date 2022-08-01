import { useNavigate } from "react-router-dom";


const BlogForm = () => {

  const navigate = useNavigate();


  return (
    <div className="blogform card card-compact w-full bg-base-100 shadow-xl cursor-pointer" onClick={() => navigate('details')} >
      <figure>
        <img className="w-full" src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body w-11/12">
        <h2 className="card-title">Shoes!</h2>
        <p>if you click BLOG FORM, you will see the DETAILS page</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
