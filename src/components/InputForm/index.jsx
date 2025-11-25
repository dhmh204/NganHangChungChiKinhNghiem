import React, { useState } from "react"; // 1. Import useState
import styles from "./InputForm.module.scss";
import classNames from "classnames/bind";


import { FaEye, FaEyeSlash } from "react-icons/fa";

const cx = classNames.bind(styles);

function InputForm({ icon, className, large = false, type, ...props }) {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type == "password";

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={cx('wrapper', className)}>
            <input
                type={isPassword && showPassword ? "text" : type}
                
                className={cx('input', { 'with-icon': icon }, { 'large': large })}
                {...props}
            />

            {icon && <span className={cx('icon')}>{icon}</span>}

            {isPassword && (
                <span className={cx('toggle-icon')} onClick={togglePassword}>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
            )}
        </div>
    );
}

export default InputForm;