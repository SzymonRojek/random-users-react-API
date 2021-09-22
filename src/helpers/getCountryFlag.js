const getCountryFlag = (shortNationalityName) => {
  if (!shortNationalityName) return;

  const codePoints = shortNationalityName
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());

  return String.fromCodePoint(...codePoints);
};

export default getCountryFlag;
