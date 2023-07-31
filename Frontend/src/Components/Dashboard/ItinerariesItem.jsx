"use client";
import classes from "../../styles/Dashboard.module.css";
import { useRouter } from "next/navigation";

const ItinerariesItem = ({ itinerary }) => {
  const router = useRouter();
  return (
    <div className={classes["main-item"]}>
      <h1>Itineraries</h1>
      <div className={classes["main-item-container"]}>
        <div className={classes["profile-item"]}>
          <div className={classes["profile-item-heading"]}>From</div>
          <div className={classes["profile-item-content"]}>
            {itinerary?.from.name}
          </div>
        </div>
        <div className={classes["profile-item"]}>
          <div className={classes["profile-item-heading"]}>To</div>
          <div className={classes["profile-item-content"]}>
            {itinerary?.to.name}
          </div>
        </div>
        <div className={classes["profile-item"]}>
          <div className={classes["profile-item-heading"]}>date from</div>
          <div className={classes["profile-item-content"]}>
            {itinerary?.dateFrom}
          </div>
        </div>
        <div className={classes["profile-item"]}>
          <div className={classes["profile-item-heading"]}>date To</div>
          <div className={classes["profile-item-content"]}>
            {itinerary?.dateTo}
          </div>
        </div>
        {itinerary?.stops.length > 0 && (
          <div className={classes["profile-item"]}>
            <div className={classes["profile-item-heading"]}>Stops</div>

            {itinerary?.stops.map((stop) => (
              <div className={classes["profile-item-content"]}>{stop.name}</div>
            ))}
          </div>
        )}
      </div>

      <button
        className={classes["edit-btn"]}
        onClick={() => router.push(`/itinerary/${itinerary.id}`)}
      >
        Edit
      </button>
    </div>
  );
};

export default ItinerariesItem;
