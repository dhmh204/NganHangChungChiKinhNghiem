import React from 'react'
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({isLinear=false, text, onClick, className, large=false}) {
  return (
    <div className={cx(className, 
      'button', {
        'linear': isLinear,
        'large': large
      }
      
    )}>{text}</div>
  )
}

export default Button