import React from "react";
import classNames from "classnames/bind";

import styles from "./FeaturedCompany.module.scss";
import SectionHeading from "../SectionHeading";
import PaginationControl from "~/components/PaginationControl"; 

import { usePagination } from "~/hook/usePagination"; 
import CompanyCard from "./CompanyCard";

const cx = classNames.bind(styles);

const ITEMS_PER_PAGE = 21;

const MOCK_DATA = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  company: `cyber ${i+1} cybercybercybercybercybercyber`,
  image: null,
  location: "Hà Nội",
  specialized: "Phần Mềm CNTT/ Dịch vụ Phần Mềm", 
  totalPrj: 5
}));

function FeaturedCompany() {
  const { currentData, pagination } = usePagination(MOCK_DATA, ITEMS_PER_PAGE);

  return (
    <div className={cx("wrapper")}>
      <SectionHeading text="Công ty nổi bật" />

      <div className={cx("content")}>
        {currentData.map((item) => (
          <CompanyCard
            key={item.id}
            company={item.company}
            image={item.image}
            location={item.location}
            specialized={item.specialized}
            totalPrj={item.totalPrj}
          />
        ))}
      </div>

      <PaginationControl 
      variant="center"
      {...pagination} />
    </div>
  );
}

export default FeaturedCompany;