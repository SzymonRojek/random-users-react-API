const destructuringData = (user) => {
  let {
    name: { first, last },
    email,
    location: {
      street: { name, number },
      city,
      postcode,
      country,
      coordinates: { latitude, longitude },
    },
    registered: { date },
    picture: { large },
    login: { uuid },
    nat,
  } = user;

  return {
    firstName: first,
    lastName: last,
    email,
    streetName: name,
    streetNumber: number,
    city,
    postcode,
    country,
    latitude,
    longitude,
    date,
    pictureLarge: large,
    nat,
    id: uuid,
  };
};

export default destructuringData;
