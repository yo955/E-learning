import { Button } from "@mui/material";
import prohileImg from "../images/profilePhoto.svg";
import "../css/Header.css";
import TelegramIcon from "@mui/icons-material/Telegram";

const Header = () => {
  return (
    <>
      <header className="container fade-up"> {/* أضف className هنا */}
        <div className="flex-container">
          <div className="card-header card-img">
            <img src={prohileImg} alt="..." />
          </div>
          <div className="card-header">
            <div className="header-container" style={{ textAlign: "right" }}>
              <h1 style={{ fontSize: "4rem" }}>
                <span>منصة </span>
                <span style={{ fontSize: "5rem" }} className="main-color">
                  كتابك
                </span>
              </h1>
              <h2 style={{ fontSize: "2rem" }}>
                منصة متكاملة بها كل ما يحتاجه الطالب ليتفوق
              </h2>
              <hr className="border" />
              <Button
                style={{ fontSize: "30px", margin: "0.5rem 0" }}
                className="btn-header"
                variant="contained"
              >
                <span style={{ fontSize: "2rem", color: 'white', padding: "1px" }}>
                  الان
                </span>
                <span>ابدا الرحله </span>
              </Button>
              <hr className="border" />
              <Button
                style={{ fontSize: "30px", margin: "0.5rem 0" }}
                variant="outlined"
                className="btn-header"
              >
                اطلب الكتب من هنا
              </Button>
              <hr className="border" />
            </div>
          </div>
        </div>
       
      </header>
      <div className="circle slide-in"> 
          <TelegramIcon className="tel-icon" />
        </div>
    </>
  );
};

export default Header;
