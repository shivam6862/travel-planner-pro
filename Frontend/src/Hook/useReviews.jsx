import { useLocationLocalStorage } from "./useLocationLocalStorage";
import { useNotification } from "./useNotification";

const useReviews = () => {
  const { NotificationHandler } = useNotification();
  const { fetchPersonalDetails } = useLocationLocalStorage();
  const Reviews = async (data) => {
    try {
      const { id } = fetchPersonalDetails();
      const userid = id;
      console.log(userid);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/reviews/${userid}`,
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
      return responsedata.type;
    } catch (err) {
      console.log(err);
      NotificationHandler("Check your connection!", "Error");
      return "false";
    }
  };
  return { Reviews };
};

export default useReviews;
