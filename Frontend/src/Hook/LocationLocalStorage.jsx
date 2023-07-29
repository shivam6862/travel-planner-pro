export const useLocationLocalStorage = () => {
  const updatePersonalDetails = (data) => {
    if (typeof localStorage !== undefined) return;
    localStorage.setItem("PersonalDetails", JSON.stringify(data));
  };
  const fetchPersonalDetails = () => {
    if (typeof localStorage !== undefined) return;
    const data = localStorage.getItem("PersonalDetails");
    const response = JSON.parse(data);
    return response;
  };
  const removePersonalDetails = () => {
    if (typeof localStorage !== undefined) return;
    localStorage.removeItem("PersonalDetails");
  };
  return {
    updatePersonalDetails,
    fetchPersonalDetails,
    removePersonalDetails,
  };
};
