import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterContent, FooterText, FooterWrap } from "../style/FooterCSS";
import {
  faCopyright,
  faFaceMehBlank,
} from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <FooterWrap>
      <FooterContent>
        {" "}
        <FooterText>
          <FontAwesomeIcon icon={faCopyright} /> 2023 Team-A. All rights
          reserved.{" "}
        </FooterText>{" "}
      </FooterContent>
    </FooterWrap>
  );
};
export default Footer;
