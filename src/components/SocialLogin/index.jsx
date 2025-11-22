import classNames from "classnames/bind";
import styles from "./SocialLogin.module.scss"; 
import IconGoogle from "~/assets/icons/IconGoogle";
import IconFacebook from "~/assets/icons/IconFacebook";
import IconLinkedin from "~/assets/icons/IconLinkedin";

const cx = classNames.bind(styles);

function SocialLogin({ label = "Hoặc" }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("label")}>{label}</div>
      <div className={cx("icons")}>
        <button className={cx("icon-btn")}><IconGoogle /></button>
        <button className={cx("icon-btn")}><IconFacebook /></button>
        <button className={cx("icon-btn")}><IconLinkedin /></button>
      </div>
    </div>
  );
}
export default SocialLogin;