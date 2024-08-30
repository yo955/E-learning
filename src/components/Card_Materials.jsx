import { useState } from "react";
import "../css/Card_Materials.css";
const Card_Materials = () => {
  const [content, setContent] = useState(false);

  function handlAddContent() {
    setContent(prevContent => !prevContent);
  }
  return (
    <>
      <h2>اللغة الانجليزية </h2>
      <h2>البرمجة</h2>
      <button className="btn-info" onClick={handlAddContent}>
        عرض المزيد
      </button>
      {content && <button className="subscrbe-btn">يلا اشترك معانا</button>}
    </>
  );
};

export default Card_Materials;
