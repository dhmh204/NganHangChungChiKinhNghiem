import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ScrollToTop.module.scss';
import { FaArrowUp } from "react-icons/fa6"; // Hoặc icon nào bạn thích

const cx = classNames.bind(styles);

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button className={cx('scroll-btn')} onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTop;