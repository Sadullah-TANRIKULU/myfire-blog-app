import { useNavigate } from "react-router-dom";

const BlogForm = (props) => {
  // console.log(props);
  const { id, authorEmail, newBlogTitle, newBlogImgUrl, newBlogContent, newBlogCreateTime } = props;
  const navigate = useNavigate();




  return (
    <div
      className="blogform card card-compact justify-between w-full bg-base-100 shadow-xl cursor-pointer"
      onClick={() => navigate("details", {state:{ id: id }})}
      key={id}
    >
      <figure>
        <img
          className="w-full"
          src={newBlogImgUrl}
          alt={newBlogTitle}
        />
      </figure>
      <div className="card-body w-11/12">
        <h2 className="card-title font-ffAcme uppercase ">{newBlogTitle}</h2>
        <span className="text-start" >{newBlogCreateTime}</span>
        <p className="truncate text-start" >{newBlogContent}</p>
      </div>
      <div className="card-actions justify-start items-center">
        <div className="avatar">
          <div className="w-8 rounded m-4 ">
            <img
              src="https://placeimg.com/192/192/people"
              alt="Tailwind-CSS-Avatar-component"
            />
          </div>
        </div>
        <p>{authorEmail}</p>
      </div>
      <div className="cardfootericons flex items-center justify-start gap-2 m-2 ">
        <div className="hearticon flex items-center justify-start gap-2 " >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          <p>0</p>
        </div>
        <div className="chaticon flex items-center justify-start gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
