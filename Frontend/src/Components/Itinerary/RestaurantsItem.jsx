import React from "react";
import Image from "next/image";
import classes from "../../styles/Itinerary.module.css";
import Star from "../Reviews/Star";

const RestaurantsItem = ({ data }) => {
  return (
    <div className={classes.containerRestaurantsItem}>
      <div className={classes.RestaurantsItemLeft}>
        <div className={classes.leftLeft}>
          <Image src={data.image} alt={data.name} width="230" height="230" />
        </div>
        <div className={classes.leftRight}>
          <h1>{data.name}</h1>
          <div className={classes.rating}>
            <Star index={data.rating} />
          </div>
          <div className={classes.location}>
            <p>{data.loaction}</p>
          </div>
          <div className={classes.popular}>
            Popular Last booked {data.popular}
          </div>
          {data.creditCard == "true" && (
            <div className={classes.creditCard}>Book without a credit card</div>
          )}
        </div>
      </div>
      <div className={classes.RestaurantsItemRight}>
        <div className={classes.rightTop}>
          <p>{data.reviews}</p>
          <p>{data.reviewsCount}</p>
        </div>
        <div className={classes.rightBottom}>
          <p>$ {data.price}</p>
          <p>+ FREE CANCELLATION</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsItem;
