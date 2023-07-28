export const useNotification = () => {
  const NotificationHook = (message, type) => {
    console.log(message, type);
  };
  return {
    NotificationHook,
  };
};
