import React from "react";
import PropTypes from "prop-types";

const ProfileComponent = (props) => {
  return (
    <>
      {props.children}

      <h1> Full name: {props.fullName}</h1>
      <br />
      <h2> Bio: {props.bio}</h2>

      <br />
      <h2>Profession: {props.profession}</h2>
      <br />
      <button onClick={() => props.handleName(props.fullName)}>SHOW ME </button>
    </>
  );
};

export default ProfileComponent;

ProfileComponent.defaultProps = {
  fullName: "#######",
  bio: "i'm a robot",
  profession: "IT ",
};

ProfileComponent.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
