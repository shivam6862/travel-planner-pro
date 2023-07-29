import PlaceCard from "../components/PlaceCard/PlaceCard";
import SelectPlace from "../components/SelectPlace";
import Auth from "../components/Authentication/Auth";
import classes from "../styles/Home.module.css";
import Vacation from "../components/Vacation/Vacation";
import Reviews from "../components/Reviews/Reviews";
import CompanyMember from "../components/CompanyMember/CompanyMember";
import About from "../components/About/About";

export default function Home() {
  return (
    <div className={classes.container}>
      <Auth />
      <About />
      <SelectPlace />
      <PlaceCard />
      <Vacation />
      <Reviews />
      <CompanyMember />
    </div>
  );
}
