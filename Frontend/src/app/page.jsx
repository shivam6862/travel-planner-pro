import PlaceCard from "../Components/PlaceCard/PlaceCard";
import SelectPlace from "../Components/SelectPlace";
import Auth from "../Components/Authentication/Auth";
import classes from "../styles/Home.module.css";
import Footer from "../Components/Footer";
import Vacation from "../Components/Vacation/Vacation";
import Reviews from "../Components/Reviews/Reviews";
import CompanyMember from "../Components/CompanyMember/CompanyMember";
import About from "../Components/About/About";

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
      <Footer />
    </div>
  );
}
