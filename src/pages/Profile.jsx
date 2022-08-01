import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile m-4 ">
      <div className="flex flex-col justify-center items-center gap-4 ">
        <div className="w-24 mask mask-hexagon">
          <img src="https://placeimg.com/192/192/people" alt="profile pic" />
        </div>
        {/* <div class="avatar placeholder">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
            <span class="text-3xl">K</span>
          </div>
        </div> */}
        <div className="displayName w-full ">
          <input className="input text-center w-11/12 " type="text" value={"blogger name here"} />
        </div>
        <div className="displayEmail w-full ">
          <input className="input text-center w-11/12 " type="email" value={"blogger email here"} />
        </div>
        <div className="moreabout textarea w-11/12 ">

        <article >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae tempore officia ipsum perspiciatis id ullam beatae repellendus architecto autem. Non. click <Link to="/about">About Me</Link> to read more...</article>
        </div>
      </div>
    </div>
  );
};

export default Profile;
