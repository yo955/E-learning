/* eslint-disable react/prop-types */
export default function ActionAreaCard(props) {
  return (
    <>
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h3>{props.para}</h3>
    </>
  );
}
