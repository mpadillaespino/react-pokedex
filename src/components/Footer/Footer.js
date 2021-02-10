import React from "react";
import { SocialIcon } from 'react-social-icons';
import { socialNetworkIconStyle } from "../../helpers/commons";
import './style.css'

const Footer = () => {
    const today = new Date();

    return (
        <div className="footer">
            <span>Copyright © {today.getFullYear()} Miguel Padilla</span>
            <SocialIcon
                target="_blank"
                network="github"
                style={socialNetworkIconStyle}
                fgColor={socialNetworkIconStyle.fgColor}
                bgColor={socialNetworkIconStyle.bgColor}
                url="https://github.com/mpadillaespino"/>
            <SocialIcon 
                target="_blank"
                network="facebook"
                style={socialNetworkIconStyle}
                fgColor={socialNetworkIconStyle.fgColor}
                bgColor={socialNetworkIconStyle.bgColor}
                url="hhttps://web.facebook.com/profile.php?id=100002073955428"/>
            <SocialIcon
                target="_blank"
                network="instagram"
                style={socialNetworkIconStyle}
                fgColor={socialNetworkIconStyle.fgColor}
                bgColor={socialNetworkIconStyle.bgColor}
                url="https://www.instagram.com/mpadillaespino/"/>
            <SocialIcon
                target="_blank"
                network="email"
                style={socialNetworkIconStyle}
                fgColor={socialNetworkIconStyle.fgColor}
                bgColor={socialNetworkIconStyle.bgColor}
                url="mailto:miguelpadillaespino@gmail.com"/>
            <SocialIcon
                target="_blank"
                network="linkedin"
                style={socialNetworkIconStyle}
                fgColor={socialNetworkIconStyle.fgColor}
                bgColor={socialNetworkIconStyle.bgColor}
                url="https://www.linkedin.com/in/miguelpadillaespino/"/>
        </div>
    )
}

export default Footer;