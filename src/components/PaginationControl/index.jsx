import React from 'react';
import classNames from 'classnames/bind';
import styles from './PaginationControl.module.scss'; 
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const cx = classNames.bind(styles);

function PaginationControl({ currentPage, totalPages, onNext, onPrev, variant = 'center' }) {
  if (totalPages <= 1) return null;

  return (
    <div className={cx('wrapper', variant)}>
      
      <button 
        className={cx('btn')} 
        onClick={onPrev} 
        disabled={currentPage === 1}
      >
        <MdArrowBackIos size={16} />
      </button>

      <span className={cx('info')}>
        {currentPage}/{totalPages} {variant === 'center' && 'trang'}
      </span>

      <button 
        className={cx('btn')} 
        onClick={onNext} 
        disabled={currentPage === totalPages}
      >
        <MdArrowForwardIos size={16} />
      </button>
    </div>
  );
}

export default PaginationControl;