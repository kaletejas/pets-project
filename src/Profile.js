import React from "react";
import Calendar from "react-calendar";

const Profile = () => {
  return (
    <>
      <form action="">
        <label htmlFor="">
          Name:
          <input type="text" name="name" />
        </label>
        <label htmlFor="">
          Age:
          <input type="text" name="age" />
        </label>
        <label htmlFor="">
          Pet's Name:
          <input type="text" name="petname" />
        </label>
        <label htmlFor="">
          Pet's Age:
          <input type="text" name="petage" />
        </label>
      </form>
      <Calendar />
      <p> Profile</p>
      <p> Profile</p>
    </>
  );
};

export default Profile;
