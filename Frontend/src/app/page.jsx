"use client";
import { useState } from "react";
import PlaceCard from "../Components/PlaceCard/PlaceCard";
// import SelectPlace from "../Components/SelectPlace";
import NewSelectPlace from "../Components/NewSelectPlace";
import Auth from "../Components/Authentication/Auth";
import classes from "../styles/Home.module.css";
import Vacation from "../Components/Vacation/Vacation";
import Reviews from "../Components/Reviews/Reviews";
import CompanyMember from "../Components/CompanyMember/CompanyMember";
import About from "../Components/About/About";
import Map from "../Components/NewMap";
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
      {/* <SelectPlace setSearchTerm={setSearchTerm} /> */}
      <NewSelectPlace setSearchTerm={setSearchTerm} />
      <div style={{ width: "90%" }}>
        <Map searchTerm={searchTerm} showRoutes={true} />
      </div>
      <PlaceCard />
      <Vacation />
      <Reviews />
      <CompanyMember />
    </div>
  );
}
