import React from 'react';
import { FaPhoneVolume } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { TbArrowsExchange } from 'react-icons/tb';

import styles from './LoginForm.module.scss';
import classNames from 'classnames/bind';
import InputForm from '~/components/InputForm';
import SocialLogin from '~/components/SocialLogin';
import Button from '~/components/Button';


const cx = classNames.bind(styles);
function LoginForm() {
  return (
    <div className={cx('login-form')}>
      <div className={cx('choose-login')}>
        <FaPhoneVolume className={cx('phone', 'icon')} />
        <MdEmail className={cx('mail', 'icon')} />
        <div className={cx('rule')}>
          <div className={cx('text')}>Ứng viên</div>
          <TbArrowsExchange className={cx('change-rule')} />
        </div>
      </div>
      <div className={cx('input-group')}>
        <InputForm placeholder='Vui lòng nhập số điện thoại' />
        <InputForm type='password' placeholder='Vui lòng nhập mật khẩu' />
      </div>
      <div className={cx('forgot-password')}>Quên mật khẩu?</div>
      <Button isLinear={true} text='Đăng nhập' />
      <SocialLogin/>
      <div className={cx('policy-check')}>
        <input 
        id='agree-terms' 
        type='checkbox' 
        className={cx('checkbox')} 
    />
    
    <label htmlFor='agree-terms' className={cx('text')}>
       Đồng ý với <a href='/' className={cx('link')}>Thỏa thuận người dùng</a> và <a href='/' className={cx('link')}>Chính sách bảo mật</a>, đồng thời cho phép CertifyX quản lý thông tin tài khoản của tôi
    </label>
      </div>
    </div>
  );
}

export default LoginForm;
