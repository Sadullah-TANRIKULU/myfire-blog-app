import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BlogContext } from "../contexts/BlogContext";

const UpdateBlog = () => {
  const { blogAllInfo, newBlogTitle, setNewBlogTitle, newBlogImgUrl, setNewBlogImgUrl, newBlogContent, setNewBlogContent } = useContext(BlogContext);
  // console.log(blogAllInfo);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state.id);

  const handleUpdateBlog = (item) => {
    item.preventDefault();
    console.log(newBlogTitle);
    console.log(newBlogImgUrl);
    console.log(newBlogContent);
    // navigate("/details")
  };
   

  return (
    <div className="updateblog" >
      {blogAllInfo?.map((item, index) => {
        console.log(item.id);
        return (
          <div key={index} className="max-w-screen-md">
            {item.id === location.state.id && (
              <form onSubmit={() => handleUpdateBlog(item)} >
                <div className="newblog m-4 overflow-hidden ">
                  <div className="flex flex-col justify-center items-center ">
                    <figure>
                      <img src={newBlogImgUrl} alt={newBlogTitle} />
                    </figure>
                    <div className="flex flex-col overflow-hidden h-11/12 w-11/12 lg:w-5/12 bg-base-100 shadow-xl">
                      <div className="flex flex-col gap-8 my-4 ">
                        <div className="displayName w-full ">
                          <input
                            className="input text-center w-3/4"
                            type="text"
                            value={newBlogTitle}
                            onChange={(e) => setNewBlogTitle(e.target.value)}
                          />
                        </div>
                        <div className="displayEmail w-full ">
                          <input
                            className="input w-3/4"
                            type="text"
                            value={newBlogImgUrl}
                            onChange={(e) => setNewBlogImgUrl(e.target.value)}
                          />
                        </div>
                        <textarea
                          className="textarea prose prose-stone md:prose-base lg:prose-xl m-4 lg:resize "
                          value={newBlogContent}
                          onChange={(e) => setNewBlogContent(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-actions justify-center">
                  <button
                    type="submit"
                    className="btn btn-secondary"
                  >
                    UPDATE
                  </button>
                </div>
              </form>
            )}
          </div>
        );
      })}

      {/*  */}
    </div>
  );
};

export default UpdateBlog;
