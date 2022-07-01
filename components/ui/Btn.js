import Link from "next/link";
import classes from "./btn-style.module.css";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

//to add css styling to link add an anchor tag, else it is auto generated//
//no need to set href as it is set by Link

export default Button;
