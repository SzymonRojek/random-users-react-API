const getFormattedData = (date) => {
  const newDate = new Date(date);

  return newDate.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
};

export default getFormattedData;
