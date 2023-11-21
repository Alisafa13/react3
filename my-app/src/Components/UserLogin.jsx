import React from 'react';

const UserLogin = () => {
  function handleButtonClick() {
    let emailInput = document.querySelector(".email");
    let emailValue = emailInput.value;

    let passwordInput = document.querySelector(".password");
    let passwordValue = passwordInput.value;
 
    let arr = emailValue.split(".");
    let lastPart = arr[arr.length - 1];

    if (lastPart === "ru" && passwordValue.length >= 8) {
      alert("Message sent");
    } else if(lastPart !== "ru") {
      alert("For e-mail: Only .ru domains are allowed.");
    }
     if(passwordValue.length < 8){
        alert("For password: At least 8 characters.")
    }
  }

  return (
    <div>
      <h2>Log in</h2>
      <form>
        <label>
          Email
          <br />
          <input className="email" type="email" />
        </label>
        <br />
        <br />
        <label>
          Password
          <br />
          <input className="password" type="password" />
        </label>
        <br />
        <br />
        <button type="button" onClick={handleButtonClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserLogin;
