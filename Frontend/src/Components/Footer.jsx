import React from "react";
import Image from "next/image";
import classes from "../styles/Footer.module.css";

const Footer = () => {
  const second = [
    "Wanderlog",
    "Blog",
    "Jobs",
    "Contact us",
    "Mobile app",
    "Browser extension",
    "Report security issue",
    "Google data disclosure",
    "Terms, Privacy policy & Copyright",
    "Travel budgeting & cost tracking",
    "How to embed a map on your travel blog",
  ];
  const third = [
    "Guides and resources",
    "Travel itinerary guides",
    "Weather around the world",
    "Road trips by destination",
    "Travel questions & answers",
    "Trip planners by destination",
    "Best places to visit by category",
    "Maps of cities and national parks",
    "Popular search terms by destination",
    "Restaurants reservations by destination",
    "Destinations at different times of the year",
  ];
  const logo = [
    "/Logo/Footer/facebook.png",
    "/Logo/Footer/instagram.png",
    "/Logo/Footer/pinterest.png",
    "/Logo/Footer/twitter.png",
  ];
  return (
    <div className={classes.container}>
      <div className={classes.upperBox}>
        <div className={classes.first}>
          <p>Made with ❤ in SF & more</p>
          <p>© 2023 Travelchime Inc.</p>
        </div>
        <div className={classes.second}>
          {second.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className={classes.third}>
          {third.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className={classes.fourth}>
          <Image
            src={`/Logo/appStore.png`}
            alt={"appStroe"}
            width="200"
            height="60"
          />
          <Image
            src={`/Logo/googlePlay.png`}
            alt={"googlePlay"}
            width="200"
            height="60"
          />
        </div>
      </div>
      <div className={classes.lowerBox}>
        {logo.map((item, index) => (
          <Image src={item} alt={index} width="40" height="40" />
        ))}
      </div>
    </div>
  );
};

export default Footer;
