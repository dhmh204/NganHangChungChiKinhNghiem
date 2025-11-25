import React from 'react'
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import WelcomeBanner from './components/WelcomeBanner';
import AuthLayout from '../../layouts/AuthLayout';

const cx = classNames.bind(styles);
function Login() {
   const [rule, setRule] = React.useState('Ứng viên');

  const handleChangeRule = () => {
    setRule((prevRule) => (prevRule === 'Ứng viên' ? 'Doanh nghiệp' : 'Ứng viên'));
  };

  return (
    <div className={cx('wrapper')}>
    <WelcomeBanner 
      title=' Để giữ kết nối với chúng tôi, vui lòng đăng nhập bằng thông tin của bạn'
      heading='Welcome back!'
      contentBtn='Đăng ký'
    ></WelcomeBanner>
    <AuthLayout heading="đăng nhập" rule={rule} handleChangeRule={handleChangeRule} isRegister={false}>
     </AuthLayout>
    </div>

  )
}

export default Login