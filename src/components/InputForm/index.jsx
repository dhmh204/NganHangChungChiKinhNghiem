import React from "react";


import styles from "./InputForm.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function InputForm({ icon, className, ...props }) {
  return (
        <div className={cx('wrapper', className)}>
           
            <input 
                className={cx('input')} 
                {...props} 
            />
        
            {icon && <span className={cx('icon')}>{icon}</span>}
        </div>
    )
}

export default InputForm