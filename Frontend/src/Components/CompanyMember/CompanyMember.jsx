import React from "react";
import classes from "../../styles/CompanyMember.module.css";
import CompanyMemberItem from "./CompanyMemberItem";

const CompanyMember = () => {
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
  return (
    <div className={classes.container}>
      <div className={classes.heading}>Our Members</div>
      <div className={classes.box}>
        {company.map((item) => (
          <CompanyMemberItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CompanyMember;
