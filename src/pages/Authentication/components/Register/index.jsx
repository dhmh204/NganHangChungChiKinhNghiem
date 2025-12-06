import React from 'react'
import classNames from 'classnames/bind';

import styles from './Register.module.scss';
import AuthLayout from '~/layouts/AuthLayout';
import { IoArrowBack } from 'react-icons/io5';
import FormRegisForBussines from './FormRegisForBussines';


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
    </div>
  )
}

export default Register