import React from 'react'
import classNames from 'classnames/bind';

import images from "~/assets/images";
import styles from './Register.module.scss';
import AuthLayout from '../../layouts/AuthLayout';
import WelcomeBanner from '../Login/components/WelcomeBanner';
import { IoArrowBack } from 'react-icons/io5';
import FormRegisForBussines from './components/FormRegisForBussines';


const cx = classNames.bind(styles); 
function Register() {
     const [rule, setRule] = React.useState('Ứng viên');
  
    const handleChangeRule = () => {
      setRule((prevRule) => (prevRule === 'Ứng viên' ? 'Doanh nghiệp' : 'Ứng viên'));
    };
  

  return (
    <div className={cx('wrapper')}>  
    <IoArrowBack
         size={50} 
         color="#5E5E5E" 
         className={cx("btn-back")} />
     <AuthLayout heading="đăng ký" rule={rule} handleChangeRule={handleChangeRule} isRegister={true}>
      <FormRegisForBussines 
        handleChangeRule={handleChangeRule} 
        rule={rule} 
        isRegister={true} />
     </AuthLayout>

      <WelcomeBanner
      title=' Nhập thông tin cá nhân của bạn và bắt đầu hành trình cùng chúng tôi!'
      heading='Hello, Friend!'
      contentBtn='Đăng nhập'
      isLogin={false}
    ></WelcomeBanner>

    </div>
  )
}

export default Register