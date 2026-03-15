import React from "react";

const UserLogin = () => {
  return (
    <form
      action="/login"
      method="POST"
      className="p-6 "
    >
      <div className="">
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default UserLogin;
