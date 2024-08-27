import "../css/Subscripe.css";
import "../css/Header.css";

const Subscripe = () => {
  return (
    <section className="slide-in"> {/* أضف className هنا */}
      <div id="subscribe-section">
        <div className="main-container">
          <div className="hero-section">
            <h1 style={{ fontSize: "4rem" }}>
              <span>مُدرسين </span>
              <span style={{ fontSize: "5rem" }} className="main-color">
                كتابك
              </span>
            </h1>
          </div>
          <div className="text">
            <p>
              بخطوات بسيطة بإمكانك الوصول الى أكفأ المدرسين اونلاين ليقوموا
              .بمساعدتك والاجابة على اسئلتك الخاصة بالمنهج الدراسي
            </p>
          </div>
          <button className="Subscribe-btn">اشترك الأن</button>
        </div>
      </div>
    </section>
  );
};

export default Subscripe;
