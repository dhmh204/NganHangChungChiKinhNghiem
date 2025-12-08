import React from "react";
import classNames from "classnames/bind";
import styles from "./PostDetailPage.module.scss";
import CandidateLayout from "~/layouts/CandidateLayout";
import ProjectHeader from "./ProjectHeader";
import ProjectDescription from "./ProjectDescription";
import RelatedProjects from "./RelatedProjects";
import CompanyInfoCard from "./CompanyInfoCard";
import SafetyDisclaimer from "./SafetyDisclaimer";

const cx = classNames.bind(styles);

const FAKE_DATA = {
  title: "Quản lý chi tiêu ",
  deadline: "30/03/2026",
  slots: 30,
  description: `<h3>Giới thiệu chung</h3>
    <p> Quản lý tài chính cá nhân là vấn đề nan giải với nhiều sinh viên. Dự án nhằm phát triển một ứng dụng di động thân thiện, giúp sinh viên theo dõi thu-chi, lập ngân sách và hình thành thói quen tiêu dùng thông minh ngay từ giảng đường.</p>

  <h3>Mục tiêu dự án</h3>
  <p><strong>Mục tiêu tổng quát:</strong> Xây dựng một ứng dụng hoàn chỉnh, từ ý tưởng đến triển khai.</p>
  <p><strong>Mục tiêu cụ thể:</strong></p>
  <ul>
    <li>App cho phép ghi chép, phân loại chi tiêu nhanh chóng.</li>
    <li>Hiển thị báo cáo trực quan (biểu đồ) về tình hình tài chính.</li>
    <li>Tính năng cảnh báo khi chi tiêu vượt ngân sách.</li>
  </ul>

  <h3>Nội dung công việc</h3>
  <ul>
    <li>Làm giao diện chính: Dashboard, Danh sách giao dịch, Biểu đồ bằng React Native.</li>
    <li>Xử lý nghiệp vụ: Thêm/sửa giao dịch, cảnh báo vượt ngân sách.</li>
    <li>Tạo RESTful API bằng Node.js cho các tính năng: đăng ký, đăng nhập.</li>
    <li>Kết nối Front-end với Back-end.</li>
  </ul>

  <h3>Yêu cầu ứng viên</h3>
  <ul>
    <li>Có kiến thức cơ bản về lập trình (JavaScript, Python hoặc Java).</li>
    <li>Ưu tiên người đã từng tiếp xúc với React Native, Flutter hoặc phát triển API.</li>
    <li>Biết sử dụng Figma hoặc SQL là một lợi thế.</li>
  </ul>`,
};
function PostDetailPage() {
  return (
    <div className={cx("post-detail-page")}>
      <CandidateLayout>
        <div className={cx("container")}>
          <div className={cx("col", "left")}>
            <ProjectHeader
              title={FAKE_DATA.title}
              deadline={FAKE_DATA.deadline}
              slots={FAKE_DATA.slots}
            />
            <ProjectDescription
              title="Chi tiết dự án"
              description={FAKE_DATA.description}
            />
            <RelatedProjects />
          </div>
          <div className={cx("col", "right")}>
        <div className={cx("box")}>
              <CompanyInfoCard
              name="CÔNG TY TNHH MTV GREENLARA"
              website="http://www.greenlara.com.vn/"
              size="100 - 200 người"
              address="Tòa nhà MICOROCOM, 30-32 Đường Tố Hữu, P. Tố Hữu, Q. Nam Từ Liêm, Hà Nội"
            />
            <SafetyDisclaimer/>
        </div>
          </div>
        </div>
      </CandidateLayout>
    </div>
  );
}

export default PostDetailPage;
