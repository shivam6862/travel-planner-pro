import ItinerariesItem from "./ItinerariesItem";
const Itineraries = ({ itineraries }) => {
  console.log(itineraries);
  return (
    <>
      {itineraries.length > 0 ? (
        itineraries.map((itinerary) => (
          <ItinerariesItem key={itinerary.id} itinerary={itinerary} />
        ))
      ) : (
        <h1>No Itinerary Found.</h1>
      )}
    </>
  );
};

export default Itineraries;
