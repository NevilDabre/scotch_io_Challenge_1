import React from "react";

// name: 'Chris on Code',
// location: 'Las Vegas',
// foodType: 'Everything',
// age: 28,
// likes: 'Coding into the wee hours of the morning',
// twitterUsername: 'chrisoncode',
// avatar:

const UserInfo = ({
  data: { name, location, foodType, age, likes, twitterUsername, avatar }
}) => {
  return (
    <div className="user-deets">
      <img src={avatar} alt="Profile" />
      <h3>{name} </h3>
      <div>
        <strong>Location</strong>
        <span>{location}</span>
      </div>
      <div>
        <strong>Eats</strong>
        <span>{foodType}</span>
      </div>
      <div>
        <strong>Age</strong>
        <span>{age}</span>
      </div>
      <div>
        <strong>Likes</strong>
        <span>{likes}</span>
      </div>
      <div>
        <strong>Twitter</strong>
        <a>{`@${twitterUsername}`}</a>
      </div>
    </div>
  );
};

export default UserInfo;
