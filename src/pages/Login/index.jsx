import React from 'react'
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import WelcomeBanner from './components/WelcomeBanner';
import AuthLayout from '../../layouts/AuthLayout';
import { IoArrowBack } from 'react-icons/io5';

const cx = classNames.bind(styles);
function Login() {
   const [rule, setRule] = React.useState('Ứng viên');

  const handleChangeRule = () => {
    setRule((prevRule) => (prevRule === 'Ứng viên' ? 'Doanh nghiệp' : 'Ứng viên'));
  };

  return (
    <div className={cx('wrapper')}>
          
    <AuthLayout heading="đăng nhập" rule={rule} handleChangeRule={handleChangeRule} isRegister={false}>
     </AuthLayout>
    </div>

  )
}

export default Login