import PlaceCard from "../Components/PlaceCard";
import SelectPlace from "../Components/SelectPlace";
import Auth from "../Components/Authentication/Auth";
import classes from "../styles/Home.module.css";

export default function Home() {
  const place = {
    image: "Greece.jpg",
    location: "Greece",
    about: "Holiday Planners is a World Leading Online Tour Booking Platform",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    duration: "5 days",
    size: "5+ people",
    cost: "$850",
    id: "dbkjfdsfnsdlknvlkdsnl",
  };
  return (
    <div className={classes.container}>
      <PlaceCard place={place} />
      <SelectPlace />
      <Auth />
    </div>
  );
}
