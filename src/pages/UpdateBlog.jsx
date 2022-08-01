import { useNavigate } from "react-router-dom";

const UpdateBlog = () => {
  const navigate = useNavigate();
  const pictureUrlHere = "https://placeimg.com/400/225/arch";
  const blogPictureHere = pictureUrlHere;

  return (
    <div className="updateblog">
      <div className="newblog m-4 overflow-hidden ">
        <div className="flex flex-col justify-center items-center ">
          <figure>
            <img src={blogPictureHere} alt="blogPicture here" />
          </figure>
          <div className="flex flex-col overflow-hidden h-11/12 w-11/12 lg:w-5/12 bg-base-100 shadow-xl">
            <div className="flex flex-col gap-8 my-4 ">
              <div className="displayName w-full ">
                <input
                  className="input text-center w-3/4"
                  type="text"
                  value={"blog title here"}
                />
              </div>
              <div className="displayEmail w-full ">
                <input
                  className="input w-3/4"
                  type="text"
                  value={"pictureUrlHere"}
                />
              </div>
              <textarea
                className="prose prose-stone md:prose-base lg:prose-xl textarea m-4 lg:resize "
                name="textarea"
                // value={"blogger background here"}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="card-actions justify-center">
        <button className="btn btn-secondary" onClick={() => navigate("/details")}>
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default UpdateBlog;
