import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ProjectHeader.module.scss";
import { FaClock, FaHourglassHalf } from "react-icons/fa";
import Button from "../../../../components/Button";
import { TbLocationFilled } from "react-icons/tb";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import HeaderSection from "../HeaderSection";

const cx = classNames.bind(styles);

function ProjectHeader({ title, deadline, slots }) {

  return (
    <div className={cx("wrapper")}>
      <HeaderSection type="favorite" title={title} />
      <div className={cx("meta")}>
        <div className={cx("item")}>
          <div className={cx("icon")}>
            <FaClock />
          </div>
          <div className={cx("content")}>
            <div className={cx("lable")}>Hạn nộp hồ sơ</div>
            <div className={cx("value")}>{deadline} </div>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("icon")}>
            <FaHourglassHalf />
          </div>
          <div className={cx("content")}>
            <div className={cx("lable")}>Số lượng ứng viên</div>
            <div className={cx("value")}>{deadline} </div>
          </div>
        </div>
      </div>
      <div className={cx("action")}>
        <Button
          className={cx("btn-apply")}
          large
          icon={<TbLocationFilled />}
          text="Nộp CV"
        />
        <div className={cx("btn-chat")}>
          <IoChatbubbleEllipsesOutline className={cx("icon-chat")}/>
          Giao tiếp
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
