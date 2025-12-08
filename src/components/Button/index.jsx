import React from 'react'
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({isLinear=false, text, onClick, className, large=false, icon}) {
  return (
    <div className={cx(className, 
      'button', {
        'linear': isLinear,
        'large': large
      }
      
    )}><span className={cx("icon")}>{icon}</span> {text}</div>
  )
}

export default Button