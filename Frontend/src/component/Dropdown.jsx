import classes from "../styles/SelectPlace.module.css";

export const Dropdown = ({ option = [], ...props }) => {
  return (
    <select {...props} className={classes.dropdown}>
      {option.map((opt) => (
        <option key={opt} value={opt} className={classes.dropdown}>
          {opt}
        </option>
      ))}
    </select>
  );
};
