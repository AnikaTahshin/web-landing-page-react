import "./Footer.scss";
import { AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="container">
        <strong className="title">Shop</strong>
        <ul>
          <li>
            <a href="">Gift cards</a>
          </li>
          <li>
            <a href="">SnipShop blog</a>
          </li>
        </ul>
      </div>
      <div className="container">
        <strong className="title">Sell</strong>
        <ul>
          <li>
            <a href="">Sell on SnipShop</a>
          </li>
          <li>
            <a href="">Tearms</a>
          </li>
          <li>
            <a href="">Forums</a>
          </li>
          <li>
            <a href="">Galleri</a>
          </li>
          <li>
            <a href="">Affiliates</a>
          </li>
        </ul>
      </div>
      <div className="container">
        <strong className="title">About</strong>
        <ul>
          <li>
            <a href="">SnipShop, Inc.</a>
          </li>
          <li>
            <a href="">Policies</a>
          </li>
          <li>
            <a href="">Investors</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Press</a>
          </li>
          <li>
            <a href="">Impact</a>
          </li>
        </ul>
      </div>
      <div className="container">
        <strong className="title">Help</strong>
        <ul className="links">
          <div>
            <li>
              <a href="">Help center</a>
            </li>
            <li>
              <a href="">Trust and safety</a>
            </li>
            <li>
              <a href="">Privacy settings</a>
            </li>
          </div>
          <div className="social">
            <li>
              <a href="">
                <AiOutlineInstagram color="white" size={25} />
              </a>
            </li>
            <li>
              <a href="">
                <FaFacebook color="white" size={25} />
              </a>
            </li>
            <li>
              <a href="">
                <AiFillTwitterCircle color="white" size={25} />
              </a>
            </li>
            <li>
              <a href="">
                <FaPinterest color="white" size={25} />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
