import classNames from "classnames/bind";

import styles from "./TermAndPolicy.module.scss";


const cx = classNames.bind(styles);


function TermAndPolicy({children, id, large=false}) {
  return (
    <div className={cx("policy-check", {
        large: large, 
      })}>
        <input 
          id={id}
          type='checkbox' 
          className={cx('checkbox', )} 
        />
        {children}
    </div>
  )
}

export default TermAndPolicy