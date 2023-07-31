import { useLocationLocalStorage } from "./useLocationLocalStorage";
import { useNotification } from "./useNotification";

const useAuth = () => {
  const { NotificationHandler } = useNotification();
  const { updatePersonalDetails } = useLocationLocalStorage();
  const Auth = async (data, type) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${type}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const responsedata = await response.json();
      NotificationHandler(responsedata.message, responsedata.type);
      if (
        (responsedata.type == "Success" && type == "signin") ||
        (responsedata.type == "Success" && type == "newPassword")
      ) {
        updatePersonalDetails(responsedata.response);
      }
      return responsedata.type;
    } catch (err) {
      console.log(err);
      NotificationHandler("Check your connection!", "Error");
      return "false";
    }
  };
  return { Auth };
};

export default useAuth;
