import React, { useState } from "react";
import HomeLink from "./HomeLink";
import "../../style/FilterLink/filterlink.css";
import { MdContentCopy, MdOutlineQrCode, MdMoreVert } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";

const HomeLinkSingle = ({ link, shortlink, isOpen, onClick }) => {
  const [addMore, setAddMore] = useState(false);
  const moreop = () => {
    setAddMore((prev) => !prev);
  };
  const backMore = () => {
    return addMore
      ? { background: "#B4048D", borderRadius: "50px", color: "#FFF" }
      : {};
  };
  const links = [
    {
      link: "astrum.uz",
      shortlink: "shortlink.uz/sdah2",
    },
  ];
  return (
    <div className="filter">
      {links?.map((item, index) => (
        <div className="filter_link">
          <p>{item.link}</p>
          <div className="filter_link_short">
            <p>{item.shortlink}</p>
            <div className="filter_link_short_svg">
              <IoShareSocialOutline />
              <MdOutlineQrCode />
              <MdContentCopy />
            </div>
            {addMore ? (
              <>
                <div className="filter_link_short_icons">
                  <IoShareSocialOutline />
                  <MdOutlineQrCode />
                  <MdContentCopy />
                </div>
                <div className="filter_link_short_icon">
                  <MdMoreVert style={backMore()} onClick={moreop} />
                </div>
              </>
            ) : (
              <div className="filter_link_short_icon">
                <MdMoreVert onClick={moreop} />
              </div>
            )}
          </div>
        </div>
      ))}
      <div className="filter_inp">
        <div className="filter_inp_box">
          <span>Clicks</span>
          <input type="text" />
        </div>
        <div className="filter_inp_box">
          <span>Popular Device</span>
          <input type="text" />
        </div>
        <div className="filter_inp_box">
          <span>Popular Browser</span>
          <input type="text" />
        </div>
        <div className="filter_inp_box">
          <span>Popular Platform</span>
          <input type="text" />
        </div>
      </div>
      <div className="filter_btn">
        <button>More</button>
      </div>
    </div>
  );
};

export default HomeLinkSingle;
