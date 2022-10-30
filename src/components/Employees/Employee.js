import { useNavigate } from "react-router-dom";

function Employee(props) {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/personal?id=${props.id}`);
  };
  return (
    <div className="empbar" onClick={navigateHandler}>
      <img className="avatar" src={props.img} alt="avatar" />
      <p>{props.name}</p>
      <p className="points"> Points: {props.points}</p>
    </div>
  );
}

export default Employee;
