import { ref, update } from "firebase/database";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { db } from "../helpers/firebase";

const UpdateBlog = () => {
  const { blogAllInfo, newBlogTitle, setNewBlogTitle, newBlogImgUrl, setNewBlogImgUrl, newBlogContent, setNewBlogContent, moveID, setAuthorEmailInfo } = useContext(BlogContext);

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(moveID);

  const handleUpdateBlog = (e, item) => {
    e.preventDefault();
    update(ref(db, `/${moveID}`), {
      newBlogTitle: newBlogTitle,
      newBlogImgUrl: newBlogImgUrl,
      newBlogContent: newBlogContent,
    });
    // console.log(newBlogTitle);
    // console.log(newBlogImgUrl);
    // console.log(newBlogContent);
    // console.log(item.authorEmail);
    setAuthorEmailInfo(item.authorEmail);
    navigate(`/details/${moveID}`);
    // navigate('/');
  };
   

  return (
    <div className="updateblog" >
      {blogAllInfo?.map((item, index) => {
        // console.log(item.id);
        return (
          <div key={index} className="max-w-screen-md">
            {item.id === moveID && (
            <form onSubmit={(e) => handleUpdateBlog(e, item)} >
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
