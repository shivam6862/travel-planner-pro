"use client";
import React, { useState, useEffect, useRef } from "react";
import classes from "../../styles/About.module.css";
import Button from "../Button";
import Image from "next/image";

const About = () => {
  const myref = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(myref.current);
  }, []);

  return (
    <div className={classes.container} ref={myref}>
      <div className={!myElementIsVisible ? classes.left : classes.leftVisible}>
        <div className={classes.bigImage}>
          <Image src={"/about-big.jpg"} alt={"big"} width="400" height="400" />
          <div className={classes.smallImage}>
            <Image
              src={"/about-small.jpg"}
              alt={"small"}
              width="220"
              height="180"
            />
          </div>
        </div>
      </div>
      <div
        className={
          !myElementIsVisible
            ? classes.right
            : `${classes.right} ${classes.rightVisible}`
        }
      >
        <h4>About us</h4>
        <h2>Plan Your Trip with Us</h2>
        <p>
          Far, far away, nestled behind majestic mountains and distant from the
          lands of Vokalia and Consonantia, dwell the blind texts. They reside
          in Bookmarksgrove, near the coast of the Semantics, where a serene
          river named Duden gracefully flows, providing essential regelialia.
          This paradisematic realm welcomes roasted parts of sentences that
          gracefully fly into your mouth. Even the all-powerful Pointing, though
          mighty, lacks dominion over these blind texts. Their unique nature
          renders them almost unorthographic, akin to the Italic Mountains. As
          she gazes upon the captivating skyline, she embraces a sense of
          longing, bidding a farewell to the mesmerizing views of this mystical
          land.
        </p>
        <div className={classes.buttons}>
          <Button name={"READ MORE"} />
        </div>
      </div>
    </div>
  );
};
export default About;
