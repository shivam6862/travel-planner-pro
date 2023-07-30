"use client";
import { useState } from "react";
import PlaceCard from "../components/PlaceCard/PlaceCard";
import SelectPlace from "../components/SelectPlace";
import Auth from "../components/Authentication/Auth";
import classes from "../styles/Home.module.css";
import Vacation from "../components/Vacation/Vacation";
import Reviews from "../components/Reviews/Reviews";
import CompanyMember from "../components/CompanyMember/CompanyMember";
import About from "../components/About/About";
import Map from "../components/NewMap";
import Land from "../Components/Land/Land";

// const getData = async () => {
//   const response = await fetch(
//     "https://test.api.amadeus.com/v1/reference-data/locations/cities?countryCode=IN&keyword=DELHI&max=5&include=AIRPORTS",
//     {
//       headers: {
//         Authorization: "Bearer " + process.env.AMADEUS_ACCESS_TOKEN,
//       },
//     }
//   );
//   return await response.json();
// };

export default function Home() {
  const [searchTerm, setSearchTerm] = useState([]);
  // const data = await getData();
  // console.log(data.data[1].geoCode);
  return (
    <div className={classes.container}>
      <Land />
      <Auth />
      <About />
      <SelectPlace setSearchTerm={setSearchTerm} />
      <div style={{ width: "90%" }}>
        <Map searchTerm={searchTerm} showRoutes={false} />
      </div>
      <PlaceCard />
      <Vacation />
      <Reviews />
      <CompanyMember />
    </div>
  );
}
