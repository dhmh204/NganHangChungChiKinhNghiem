import React from 'react'
import classNames from 'classnames/bind';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';
import { TbArrowsExchange } from 'react-icons/tb';  
import  IconGoogle from '~/assets/icons/IconGoogle';

import styles from './ChooseLogin.module.scss';
const cx = classNames.bind(styles);

function ChooseLogin({ chooseLogin, handleChooseLogin, handleChangeRule, rule, isBusiness = false, isRegisBGg=false}) {
  return (
     <div className={cx('choose-login')}>
           {
              !isBusiness ? 
              (<FaPhoneVolume className={cx('phone', 'icon', 
             chooseLogin ? 'active' : ''
           )}
             onClick={handleChooseLogin}
           />) : (
            <IconGoogle className={cx('google', 'icon', 
             chooseLogin ? 'active' : ''
           )}
             onClick={handleChooseLogin}
           />)
           }
           <MdEmail className={cx('mail', 'icon', 
            !chooseLogin ? 'active' : ''
           )}
             onClick={handleChooseLogin}
           />
           <div className={cx('rule', 
            isBusiness ? 'business-rule' : ''
           )} onClick={handleChangeRule}>
             <div className={cx('text')} >{rule}</div>
             <TbArrowsExchange className={cx('change-rule')}/>
           </div>
           
         </div>
  )
}

export default ChooseLogin