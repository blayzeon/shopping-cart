import React from "react";

export default function Profile() {
  const handleclick = (e) => {
    e.preventDefault();
    alert("Are you sure?");
  };
  return (
    <div className="container">
      <h2>BLAST OFF AT THE SPEED OF LIGHT!</h2>
      <p>
        Do you like catching and battling with rare Pokemon but want to skip the
        commitment of feeding and storing for them yourself? <br />
        <br /> <strong>Join Team Rocket!</strong>
      </p>
      <p>Enjoy these exciting membership perks:</p>
      <ul>
        <li>6 free Rocket Balls™ per month (MSRP: $7,200)</li>
        <li>Access to our huge trading network amongst members</li>
        <li>50% commission on all Pokemon sales caught by you</li>
        <li>Free uniform for all new members, a $50,000 value!</li>
      </ul>
      <div className="flex-text-img">
        <p>Membership starts at only $10,000 per month.</p>
        <img src="/img/rattata.svg" alt="rattata" />
        <p>Sign up today and receive a free Rattata!</p>
      </div>
      <form>
        <div className="input-container">
          <label>Name:</label>
          <input type="text"></input>
        </div>

        <div className="input-container">
          <label>Address:</label>
          <input type="text"></input>
        </div>

        <div className="input-container">
          <label>SSN:</label>
          <input type="password" maxLength={3}></input> -
          <input type="password" maxLength={2}></input> -
          <input type="password" maxLength={4}></input>
        </div>

        <div className="flex-center-gap">
          <label>
            Shirt Size:{" "}
            <select>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </label>
          <label>
            Pant Size:{" "}
            <select>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </label>
        </div>
        <button onClick={handleclick}>Sign Up Today!</button>
      </form>
    </div>
  );
}
