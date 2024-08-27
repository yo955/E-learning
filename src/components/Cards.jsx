/* eslint-disable react/prop-types */
export default function ActionAreaCard(props) {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
      <p>{props.para}</p>
    </div>
  );
}
