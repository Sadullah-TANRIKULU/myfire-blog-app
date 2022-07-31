const Profile = () => {
  return (
    <div className="profile m-4 ">
      <div className="avatar flex flex-col justify-center items-center ">
        <div className="w-24 mask mask-hexagon">
          <img src="https://placeimg.com/192/192/people" alt="profile pic" />
        </div>
        {/* <div class="avatar placeholder">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
            <span class="text-3xl">K</span>
          </div>
        </div> */}
        <div className="displayName">
          <input className="text-center" type="text" value={"blogger name here"} />
        </div>
        <div className="displayEmail">
          <input className="text-center" type="email" value={"blogger email here"} />
        </div>
        <textarea name="textarea" value={"blogger background here"}></textarea>
      </div>
    </div>
  );
};

export default Profile;
