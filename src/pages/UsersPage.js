import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/";

import "./styles.css";
import { useUsersDataApi } from "./../api";
import { Error, Loader, User } from "./../components";
import UserDetails from "./UserDetails";
import { getRandomBackgroundColor } from "./../helpers";

const useStyles = makeStyles({
  grid: {
    width: "100%",
    padding: "20px",
    margin: "0 auto",
  },
});

const UsersPage = () => {
  const { users, status } = useUsersDataApi();
  const classes = useStyles();

  switch (status) {
    case "loading":
      return <Loader label="Updating Users List" />;
    case "error":
      return <Error />;
    case "success":
      return (
        <>
          <Switch>
            <Route
              exact
              path="/users/:id"
              render={({ match }) => {
                const urlId = String(match.params.id);
                const foundUser = users.find(
                  (user) => user.login.uuid === urlId
                );

                return (
                  <UserDetails
                    foundUser={foundUser}
                    bgc={getRandomBackgroundColor}
                  />
                );
              }}
            />

            <Route
              exact
              path="/users"
              render={() => (
                <Grid container spacing={4} className={classes.grid}>
                  {users &&
                    users.map((user) => (
                      <User
                        user={user}
                        key={user.login.uuid}
                        bgc={getRandomBackgroundColor}
                      />
                    ))}
                </Grid>
              )}
            />
          </Switch>
        </>
      );
    default:
      throw new Error(`incorrect status: ${status}`);
  }
};

export default UsersPage;
