import { useContext } from "react";
import NotificationContext from "../Store/Notification-context";

const backGroundColor = {
  Success: "#28a745",
  Error: "#dc3545",
  Info: "#17a2b8",
  Warn: "#ffc107",
};

export const useNotification = () => {
  const notificationCtx = useContext(NotificationContext);
  const NotificationHandler = (message, status) => {
    const color = backGroundColor[status];
    notificationCtx.onMessage(message, color);
  };
  return { NotificationHandler };
};
