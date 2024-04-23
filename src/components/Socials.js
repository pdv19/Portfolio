import React from "react";
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        {/* <li>
          <a href="http://facebook.com" target="_blank" rel="noreferrer">
            <ImFacebook style={{color: '#B18845'}} />
          </a>
        </li> */}
        {/* <li>
          <a href="http://twitter.com" target="_blank" rel="noreferrer">
            <ImTwitter  style={{color: '#B18845'}} />
          </a>
        </li>
        <li>
          <a href="http://pinterest.com" target="_blank" rel="noreferrer">
            <ImPinterest style={{color: '#B18845'}} />
          </a>
        </li> */}
        <li>
          <a href="https://www.instagram.com/themyth.visuals/" target="_blank" rel="noreferrer">
            <ImInstagram style={{color: '#B18845'}} />
          </a>
        </li>
        {/* <li>
          <a href="https://www.youtube.com/@themythvisuals" target="_blank" rel="noreferrer">
            <ImYoutube style={{color: '#B18845'}} />
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Socials;
