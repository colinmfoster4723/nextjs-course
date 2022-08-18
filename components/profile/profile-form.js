import { useRef } from "react";
import classes from "./profile-form.module.css";

function ProfileForm(props) {
  const newPassword = useRef();
  const oldPassword = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const newPass = newPassword.current.value;
    const oldPass = oldPassword.current.value;

    props.onChangePassword({
      oldPassword: oldPass,
      newPassword: newPass,
    });
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPassword} />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={oldPassword} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
