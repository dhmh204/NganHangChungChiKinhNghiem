import React from 'react'
import classNames from "classnames/bind";
import { MdEmail } from "react-icons/md";

import IconSecurity from "~/assets/icons/IconSecurity";
import InputForm from "~/components/InputForm";
import styles from './AccountSection.module.scss'

const cx = classNames.bind(styles);

function AccountSection() {
  return (
     <div className={cx("form-content", "account-info")}>
             <InputForm
               icon={<MdEmail className={cx("icon-mail")} />}
               placeholder="Nhập email"
               large
             />
             <InputForm
               icon={<IconSecurity />}
               type="password"
               placeholder="Nhập mật khẩu"
               large
             />
             <InputForm
               icon={<IconSecurity />}
               type="password"
               placeholder="Nhập lại mật khẩu"
               large
             />
           </div>
  )
}

export default AccountSection