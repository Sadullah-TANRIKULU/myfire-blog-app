import { useNavigate } from "react-router-dom";

const Details = () => {

    const navigate = useNavigate();



  return (
    <div className="details mt-4 flex flex-col justify-center items-center ">
      <div className="blogform card card-compact  w-11/12 bg-base-100 shadow-xl cursor-pointer">
        <figure>
          <img
            className="w-full"
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
          />
        </figure>
        <div className="card-body w-11/12">
          <h2 className="card-title">Shoes!</h2>
          <p>This is DETAILS page</p>
        </div>
      </div>
      <div className="card-actions w-full flex justify-evenly my-4 ">
        <button className="btn btn-secondary" onClick={() => navigate('/updateblog')} >UPDATE</button>
        <button className="btn btn-error" onClick={() => navigate('/')} >DELETE</button>
      </div>
    </div>
  );
};

export default Details;
