import React from "react";
import classes from "../../styles/CompanyMember.module.css";

const CompanyMemberItem = ({ item }) => {
  return <div className={classes.containerItem}>{item.company}</div>;
};

export default CompanyMemberItem;
