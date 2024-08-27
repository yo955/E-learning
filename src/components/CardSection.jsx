import "../css/CardSection.css";
import ActionAreaCard from "./Cards";
//images
import img_1 from "../images/blackboard-svgrepo-com.svg";
import img_2 from "../images/elearning-training-svgrepo-com.svg";
import img_3 from "../images/school-svgrepo-com.svg";
import img_4 from "../images/study-2-svgrepo-com.svg";

const cardData = [
  {
    img: img_1,
    title: "Title 1",
    para: "Description 1"
  },
  {
    img: img_2,
    title: "Title 2",
    para: "Description 2"
  },
  {
    img: img_3,
    title: "Title 3",
    para: "Description 3"
  },
  {
    img: img_4,
    title: "Title 4",
    para: "Description 4"
  }
];

const CardSection = () => {
  return (
    <section id="card-section">
      <div className="container">
        <div className="hero-section">
          <h1 style={{ fontSize: "4rem" }}>
            <span>ازاى </span>
            <span style={{ fontSize: "5rem" }} className="main-color">
              بسطنهالك
            </span>
          </h1>
        </div>
        <div className="cards">
          {cardData.map((card, index) => (
            <div className="card" key={index}>
              <ActionAreaCard img={card.img} title={card.title} para={card.para} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
