import React, { useState } from "react";
import "../style/moreinfo.css";
import Logo from "../images/Logo text.svg";
import DescIMG from "../images/image 4.png";
import HomeLink from "../components/links/HomeLink";
import HomeLinkSingle from "../components/links/HomeLinkSingle";
import MoreInfoLink from "../components/links/MoreInfoLink";
import MoreInfoLinkSingle from "../components/links/MoreInfoLinkSingle";

const Home = () => {
  const [openLinkIndex, setOpenLinkIndex] = useState(null);
  const links = [
    {
      link: "astrum.uz",
      shortlink: "shortlink.uz/sdah2",
    },
    {
      link: "qwasar.io",
      shortlink: "shortlink.uz/iowda",
    },
    {
      link: "cs2money.com",
      shortlink: "shortlink.uz/csdk2i",
    },
    {
      link: "cs2money.com",
      shortlink: "shortlink.uz/csdk2i",
    },
    {
      link: "cs2money.com",
      shortlink: "shortlink.uz/csdk2i",
    },
    {
      link: "cs2money.com",
      shortlink: "shortlink.uz/csdk2i",
    },
    {
      link: "cs2money.com",
      shortlink: "shortlink.uz/csdk2i",
    },
    {
      link: "cs2money.com",
      shortlink: "shortlink.uz/csdk2i",
    },
    {
      link: "cs2money.com",
      shortlink: "shortlink.uz/csdk2i",
    },
    {
      link: "cs2money.com",
      shortlink: "shortlink.uz/csdk2i",
    },
    {
      link: "cs2money.com",
      shortlink: "shortlink.uz/csdk2i",
    },
    {
      link: "cs2money.com",
      shortlink: "shortlink.uz/csdk2i",
    },
    {
      link: "cs2money.com",
      shortlink: "shortlink.uz/csdk2i",
    },
    {
      link: "cs2money.com",
      shortlink: "shortlink.uz/csdk2i",
    },
    {
      link: "cs2money.com",
      shortlink: "shortlink.uz/csdk2i",
    },
    {
      link: "cs2money.com",
      shortlink: "shortlink.uz/csdk2i",
    },
    {
      link: "cs2money.com",
      shortlink: "shortlink.uz/csdk2i",
    },
    {
      link: "cs2money.com",
      shortlink: "shortlink.uz/csdk2i",
    },
    {
      link: "cs2money.com",
      shortlink: "shortlink.uz/csdk2i",
    },
    {
      link: "cs2money.com",
      shortlink: "shortlink.uz/csdk2i",
    },
    {
      link: "cs2money.com",
      shortlink: "shortlink.uz/csdk2i",
    },
    {
      link: "cs2money.com",
      shortlink: "shortlink.uz/csdk2i",
    },
  ];
  const handleLinkClick = (index) => {
    setOpenLinkIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="moreinfo">
      <div className="moreinfo_nav">
        <img src={Logo} alt="" />
        <p>User name</p>
      </div>
      <div className="moreinfo_main">
        <div className="moreinfo_main_create">
          <div className="moreinfo_main_create_inp">
            <input type="text" placeholder="paste your link here" />
            <button>Create</button>
          </div>
          <div className="moreinfo_main_create_bg">
            <div className="moreinfo_main_create_table">
              {links?.map(({ link, shortlink }, index) => (
                <MoreInfoLink
                  key={index}
                  link={link}
                  shortlink={shortlink}
                  onClick={() => handleLinkClick(index)}
                  isOpen={index === openLinkIndex}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="moreinfo_main_filter">
          <MoreInfoLinkSingle />
        </div>
      </div>
      <div className="moreinfo_desc">
        <div className="moreinfo_descbg"></div>
        <div className="moreinfo_desc_card">
          <img src={DescIMG} alt="" />
          <p>
            Instant Shortening: Transform lengthy URLs into concise, shareable
            links with just a click. Say goodbye to messy and intimidating web
            addresses.
          </p>
        </div>
        <div className="moreinfo_desc_card">
          <img src={DescIMG} alt="" />
          <p>
            Secure and Reliable: Rest easy knowing your links are secure. Our
            robust system ensures reliable shortening and redirection, enhancing
            the user experience.
          </p>
        </div>
        <div className="moreinfo_desc_card">
          <img src={DescIMG} alt="" />
          <p>
            Track Your Links: Gain insights into link performance with our
            analytics. Monitor clicks, geographical locations, and more to
            optimize your sharing strategy.
          </p>
        </div>
        <div className="moreinfo_desc_card">
          <img src={DescIMG} alt="" />
          <p>
            🎨 Customization Options: Personalize your short links to match your
            brand or content. Stand out and make an impact with branded,
            memorable URLs.
          </p>
        </div>
        <div className="moreinfo_desc_card desc_card">
          <img src={DescIMG} alt="" />
          <p>
            Universal Access: Access your short links anytime, anywhere. Whether
            you're on your desktop or mobile device, experience seamless link
            management.
          </p>
        </div>
      </div>
      <div className="footer">
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>GetTheShort © Copyright 2024</p>
      </div>
    </div>
  );
};

export default Home;
