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
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth. Even
          the all-powerful Pointing has no control about the blind texts it is
          an almost unorthographic. Italic Mountains, she had a last view back
          on the skyline
        </p>
        <div className={classes.buttons}>
          <Button name={"READ MORE"} />
        </div>
      </div>
    </div>
  );
};
export default About;
