"use client";
import React, { useState, useEffect, useRef } from "react";
import classes from "../../styles/CompanyMember.module.css";
import CompanyMemberItem from "./CompanyMemberItem";

const CompanyMember = () => {
  const myref = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState();

  const company = [
    {
      company: "Booking.com",
      id: "1",
    },
    {
      company: "amadeus",
      id: "2",
    },
    {
      company: "travelport",
      id: "3",
    },
    {
      company: "travelgeio",
      id: "3",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(myref.current);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.heading}>Our Members</div>
      <div
        className={!myElementIsVisible ? classes.box : `${classes.boxVisible}`}
        ref={myref}
      >
        {company.map((item) => (
          <CompanyMemberItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CompanyMember;
