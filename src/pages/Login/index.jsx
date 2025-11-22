import React from 'react'
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import WelcomeBanner from './components/WelcomeBanner';
import LoginPanel from './components/LoginPanel';

const cx = classNames.bind(styles);
function Login() {
  return (
    <div className={cx('wrapper')}>
    <WelcomeBanner 
      title=' Để giữ kết nối với chúng tôi, vui lòng đăng nhập bằng thông tin của bạn'
      heading='Welcome back!'
      contentBtn='Đăng ký'
      isLogin
    ></WelcomeBanner>

    <LoginPanel />
    {/* RIGHT */}
  
    </div>

  )
}

export default Login