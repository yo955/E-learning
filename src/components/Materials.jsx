import Card_Materials from "./Card_Materials";
import "../css/Materials.css";
import "../css/Card_Materials.css";
const CardTitle = [
  "الصف الثالث الثانوى",
  "الصف الثانى الثانوى",
  "الصف الاول الثانوى",
];
const Materials = () => {
  return (
    <section>
      <div className="container">
        <div className="hero-section">
          <h1 style={{ fontSize: "4rem" ,marginTop:'10rem'}}>
            <span>مواد </span>
            <span style={{ fontSize: "5rem" }} className="main-color">
              بسطنهالك
            </span>
          </h1>
        </div>
        <div className="main-card">
          <div className="cards-grid">
            {CardTitle.map((t, index) => (
              <div className="card-main" key={index} title={t}>
                <div className="card-title">
                  <h2>{t}</h2>
                </div>
                <div className="card-materials">
                  <Card_Materials />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
