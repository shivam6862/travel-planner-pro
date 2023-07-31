import classes from "../../styles/Dashboard.module.css";
const Profile = ({ user }) => {
  const { name, email } = user;
  return (
    <div className={classes["main-item"]}>
      <h1>Profile</h1>
      <div className={classes["profile-item"]}>
        <div className={classes["profile-item-heading"]}>Name</div>
        <div className={classes["profile-item-content"]}>{name}</div>
      </div>
      <div className={classes["profile-item"]}>
        <div className={classes["profile-item-heading"]}>Email</div>
        <div className={classes["profile-item-content"]}>{email}</div>
      </div>
    </div>
  );
};

export default Profile;
