import { useState, useEffect } from "react";

const API_URL = "https://randomuser.me/api/";
const getSpecificUsersNumber = `?results=${12}`;

export const useUsersDataApi = () => {
  const [usersData, setUsersData] = useState({
    status: "loading",
    users: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}${getSpecificUsersNumber}`);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { results } = await response.json();

        if (!results) {
          throw new Error("Something happened - no data");
        }

        setUsersData({ status: "success", users: results });
      } catch (error) {
        setUsersData({ status: "error" });
      }
    };

    setTimeout(fetchData, 500);
  }, []);

  return usersData;
};
