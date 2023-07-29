const useLocation = () => {
  const getLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const location = {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            };
            console.log(location);
            resolve(location);
          },
          (error) => {
            console.error("Error getting location:", error.message);
            reject(error);
          }
        );
      } else {
        reject(new Error("Geolocation is not supported by your browser."));
      }
    });
  };

  return { getLocation };
};

export default useLocation;
