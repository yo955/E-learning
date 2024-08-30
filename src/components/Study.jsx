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
      id="study-section"
    >
      <div className="container-sm">
        <div>
          <div className="img-world">
            <img src={img_world} alt=".." />
          </div>
        </div>
        <div className="content" style={{ height: "80%" }}>
          <div className="icons" style={{ textAlign: "right" }}>
            <LanguageIcon  style={{ fontSize: "4rem", margin: "0 3rem" }} />
            <AccessTimeIcon style={{ fontSize: "4rem" }} />
          </div>
          <div className="right" >
            <h1 >
              ذاكر في اي وقت
            </h1>
            <h2 >
              فى اى <span>مكان</span>
            </h2>
           
          </div>
          <Button
            className="btn-mui"
              variant="outlined"
            >
              هبسطهالك
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Study;
