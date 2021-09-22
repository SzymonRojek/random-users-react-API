import { Grid } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";

import "./styles.css";
import { UserContainer } from "./../UserContainer";
import ArrowRightIcon from "./../../images/right-arrow.svg";
import { destructuringData, getCountryFlag, checkValue } from "./../../helpers";

const User = ({ user, bgc }) => {
  const { firstName, lastName, country, pictureLarge, nat } =
    destructuringData(user);

  const isName = firstName || lastName ? true : false;
  const isPicture = pictureLarge ? true : false;

  return (
    <Grid item xs={12} md={4} lg={3}>
      <UserContainer
        user={user}
        icon={ArrowRightIcon}
        to={`/users/${user.login.uuid}`}
      >
        <div
          className="upper-container"
          style={{ backgroundColor: bgc() }}
        ></div>
        <div className="img-wrapper">
          {isPicture ? (
            <img src={pictureLarge} alt="avatar" className="user-avatar" />
          ) : (
            <PersonIcon color="primary" fontSize="large" />
          )}
        </div>
        <div className="lower-container">
          <p className="user-name">
            {isName ? `${firstName} ${lastName}` : ""}
          </p>
          <p className="country-paragraph">
            {getCountryFlag(nat)} {checkValue(country)}
          </p>
        </div>
      </UserContainer>
    </Grid>
  );
};

export default User;
