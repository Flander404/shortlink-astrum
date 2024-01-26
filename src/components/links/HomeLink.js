import React, { useState } from "react";
import { MdOutlineQrCode, MdContentCopy, MdMoreVert } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";

const HomeLink = ({ link, shortlink, isOpen, onClick }) => {
  const backColor = isOpen ? "#B4048D" : "";

  const handleMoreClick = () => {
    onClick();
  };
  const [openLinkIndex, setOpenLinkIndex] = useState(null);
  const handleLinkClick = (index) => {
    setOpenLinkIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="home_main_create_link">
      <p>{link}</p>
      <div className="home_main_create_link_short">
        <p>{shortlink}</p>
        <div className="home_main_create_link_short_svg">
          <MdOutlineQrCode />
          <FaChartBar />
          <MdContentCopy />
        </div>
        {isOpen && (
          <div className="home_main_create_link_short_icons">
            <MdOutlineQrCode />
            <FaChartBar />
            <MdContentCopy />
          </div>
        )}
        <div className="home_main_create_link_short_icon">
          <MdMoreVert
            style={{
              background: backColor,
              borderRadius: "50px",
              width: "24px",
              height: "24px",
              color: isOpen ? "#FFF" : "",
            }}
            onClick={handleMoreClick}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeLink;
