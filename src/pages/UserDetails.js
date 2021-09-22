import { useState } from "react";

import "./styles.css";
import { UserContainer, Map } from "./../components";
import ArrowLeftIcon from "./../images/left-arrow.svg";
import LocationIcon from "./../images/location-icon.svg";
import { checkValue, getFormattedDate, destructuringData } from "./../helpers";

const UserDetails = ({ foundUser, bgc }) => {
  const { email, streetName, streetNumber, city, postcode, date } =
    destructuringData(foundUser);

  const [isMap, setMap] = useState(false);
  const mapHandler = () => setMap((prev) => !prev);

  return (
    foundUser && (
      <>
        <UserContainer icon={ArrowLeftIcon} to={"/users"}>
          <h3 className="details-heading">More details:</h3>
          <div className="details-container" style={{ backgroundColor: bgc() }}>
            <p className="address-paragraph">Address:</p>
            <ul className="address-list">
              <li>Street: {checkValue(streetName)}</li>
              <li>Number: {checkValue(streetNumber)}</li>
              <li>City: {checkValue(city)}</li>
              <li>Postcode: {checkValue(postcode)}</li>
            </ul>
            <p className="details-paragraph">Email: </p>
            <li>{checkValue(email)}</li>
            <p className="details-paragraph">Registered:</p>
            <li>{checkValue(getFormattedDate(date))}</li>
          </div>
          <div className="location-wrapper">
            <button
              className="location-button location-wrapper"
              onClick={mapHandler}
            >
              <img
                src={LocationIcon}
                alt="location-icon"
                className="location-icon"
              />
            </button>
          </div>
        </UserContainer>

        {isMap && <Map foundUser={foundUser} checkValue={checkValue} />}
      </>
    )
  );
};

export default UserDetails;
