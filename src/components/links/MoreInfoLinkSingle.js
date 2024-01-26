import React, { useState } from "react";
import HomeLink from "./HomeLink";
import "../../style/FilterLink/moreinfo.filter.css";
import { MdContentCopy, MdOutlineQrCode, MdMoreVert } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";

const MoreInfoLinkSingle = ({ link, shortlink, isOpen, onClick }) => {
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
    <div className="moreinfo_filter">
      {links?.map((item, index) => (
        <div className="moreinfo_link">
          <p>{item.link}</p>
          <div className="moreinfo_link_short">
            <p>{item.shortlink}</p>
            <div className="moreinfo_link_short_svg">
              <IoShareSocialOutline />
              <MdOutlineQrCode />
              <MdContentCopy />
            </div>
            {addMore ? (
              <>
                <div className="moreinfo_link_short_icons">
                  <IoShareSocialOutline />
                  <MdOutlineQrCode />
                  <MdContentCopy />
                </div>
                <div className="moreinfo_link_short_icon">
                  <MdMoreVert style={backMore()} onClick={moreop} />
                </div>
              </>
            ) : (
              <div className="moreinfo_link_short_icon">
                <MdMoreVert onClick={moreop} />
              </div>
            )}
          </div>
        </div>
      ))}
      <div className="moreinfo_inp">
        <div className="moreinfo_inp_box">
          <span>Clicks</span>
          <input type="text" />
        </div>
        <div className="moreinfo_inp_box">
          <span>Popular Device</span>
          <input type="text" />
        </div>
        <div className="moreinfo_inp_box">
          <span>Popular Browser</span>
          <input type="text" />
        </div>
        <div className="moreinfo_inp_box">
          <span>Popular Platform</span>
          <input type="text" />
        </div>
        <div className="moreinfo_inp_box">
          <span>Popular Platform</span>
          <input type="text" />
        </div>
        <div className="moreinfo_inp_box">
          <span>Popular Platform</span>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default MoreInfoLinkSingle;
