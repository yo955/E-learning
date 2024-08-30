import "../css/Study.css";
import img_world from "../images/World.png";
//icons
import LanguageIcon from "@mui/icons-material/Language";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Button } from "@mui/material";
const Study = () => {
  return (
    <section
      style={{
        marginTop: "10rem",
        background: "rgb(17 186 240)",
        height: "35rem",
        display: "flex",
      }}
    >
      <div className="container-sm">
        <div>
          <div className="img-world">
            <img src={img_world} alt=".." />
          </div>
        </div>
        <div className="content" style={{ height: "80%" }}>
          <div className="icons" style={{ textAlign: "right" }}>
            <LanguageIcon style={{ fontSize: "6rem", margin: "0 3rem" }} />
            <AccessTimeIcon style={{ fontSize: "6rem" }} />
          </div>
          <div className="right" style={{ textAlign: "right" }}>
            <h1 style={{ color: "#fff", fontSize: "5rem", marginBottom: "0" }}>
              ذاكر في اي وقت
            </h1>
            <h2 style={{ color: "#000", fontSize: "5rem", margin: "5px 0" }}>
              فى اى <span style={{ color: "rgb(254 215 0)" }}>مكان</span>
            </h2>
            <Button
              variant="outlined"
              style={{
                background: "rgb(98 60 234)",
                color: "white",
                width: "10rem",
                height: "3.5rem",
                fontSize:"1.5rem"
              }}
            >
              هبسطهالك
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Study;
