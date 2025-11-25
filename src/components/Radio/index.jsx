import React from 'react';
import classNames from 'classnames/bind';
import styles from './Radio.module.scss';

const cx = classNames.bind(styles);

function Radio({ children, checked, onChange, name, value, className, ...props }) {
    return (
        <label className={cx('wrapper', className)}>
            <input
                type="radio"
                className={cx('input')}
                checked={checked}
                onChange={onChange}
                name={name}
                value={value}
                {...props}
            />
            <div className={cx('checkmark')}></div>
            
            <span className={cx('label')}>{children}</span>
        </label>
    );
}

export default Radio;