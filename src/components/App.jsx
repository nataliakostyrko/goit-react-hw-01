import React from "react";
import Profile from "./Profile/Profile";
import userData from "../assets/userData.json";




const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />

    </>
  );
};

export default App
