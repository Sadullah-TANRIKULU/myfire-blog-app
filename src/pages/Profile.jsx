import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);

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
          <p>{currentUser.displayName}</p>
        </div>
        <div className="displayEmail w-full ">
          <p>{currentUser.email}</p>
          <p>{currentUser.emailVerified}</p>
          <p><span>Last login time : </span>{currentUser.metadata.lastSignInTime}</p>
          
        </div>
        <div className="moreabout w-full ">
          <textarea className="textarea prose prose-stone md:prose-base lg:prose-xl m-4 lg:resize h-80 md:w-full " >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            tempore officia ipsum perspiciatis id ullam beatae repellendus
            architecto autem. Non. click to read more...
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default Profile;
