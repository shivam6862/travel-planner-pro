import { setCookie, deleteCookie } from "cookies-next";
export const useLocationLocalStorage = () => {
  const updatePersonalDetails = (data) => {
    if (typeof localStorage !== undefined)
      localStorage.setItem("PersonalDetails", JSON.stringify(data));
    setCookie("isLogged", true);
  };
  const fetchPersonalDetails = () => {
    if (typeof localStorage !== "undefined") {
      const data = localStorage.getItem("PersonalDetails");
      const response = JSON.parse(data);
      return response;
    }
  };
  const getUser = () => {
    if (typeof localStorage !== "undefined") {
      const data = localStorage.getItem("PersonalDetails");
      const response = JSON.parse(data);
      return { name: response.name, email: response.email };
    }
  };
  const removePersonalDetails = () => {
    if (typeof localStorage !== undefined)
      localStorage.removeItem("PersonalDetails");
    deleteCookie("isLogged");
  };
  return {
    updatePersonalDetails,
    fetchPersonalDetails,
    removePersonalDetails,
    getUser,
  };
};
