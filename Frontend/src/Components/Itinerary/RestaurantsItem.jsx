import React from "react";
import Image from "next/image";
import classes from "../../styles/Itinerary.module.css";
import Star from "../Reviews/Star";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const RestaurantsItem = ({ data }) => {
  const router = useRouter();
  return (
    <div className={classes.containerRestaurantsItem}>
      <div className={classes.RestaurantsItemLeft}>
        <div className={classes.leftLeft}>
          <Image src={data.image} alt={data.name} width="230" height="230" />
        </div>
        <div className={classes.leftRight}>
          <h1>{data.name}</h1>
          <div className={classes.rating}>
            <Button
              sx={{
                backgroundColor: "#F2F2F2",
                color: "#000000",
                borderRadius: "10px",
                padding: "5px 10px",
                fontSize: "12px",
                fontWeight: "bold",
                marginRight: "10px",
                marginBottom: "10px",
                textTransform: "none",
              }}
              onClick={() => router.push(data?.bookingLink, "_blank")}
              title="Book Now"
            >
              Book Now
            </Button>
          </div>
          <div className={classes.location}>{/* <p>{data}</p> */}</div>
          <div className={classes.popular}>
            {/* Popular Last booked {data.popular} */}
          </div>
          {/* {data.creditCard == "true" && (
            <div className={classes.creditCard}>Book without a credit card</div>
          )} */}
        </div>
      </div>
      <div className={classes.RestaurantsItemRight}>
        <div className={classes.rightTop}>
          {/* <p>{data.reviews}</p>
          <p>{data.reviewsCount}</p> */}
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
