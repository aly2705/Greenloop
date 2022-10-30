import "./PersonalPage.css";
import icon from "../images/logov.png";
import Back from "../images/Back.png";
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "../store/users-context";

function PersonalPage() {
  const location = useLocation();
  const id = location.search.slice(4);
  console.log(id);

  const usersContext = useContext(UsersContext);
  const profileData =
    id !== "personal" ? usersContext.employees.at(id - 1) : null;

  const guidelines =
    id === "personal"
      ? usersContext.personal.guidelines
      : usersContext.employeesGuidelines;

  const scores =
    id === "personal"
      ? usersContext.personal.scores
      : usersContext.employees.at(id - 1).scores;

  return (
    <div className="pagelay">
      <div className="flex">
        <h1>{id === "personal" ? "My" : `${profileData.name}'s`} stats:</h1>
        {id !== "personal" && (
          <div className="flex2">
            <h2>Points: {profileData.points}</h2>
            <img className="icon" src={icon} alt="" />
          </div>
        )}
      </div>

      <div>
        <table>
          <tbody>
            {guidelines.map((guideline, i) => {
              return (
                <tr key={i}>
                  <td>{guideline}</td>
                  <td>{scores[i]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {id !== "personal" && (
          <NavLink className="back-btn" to={"/manager"}>
            <img src={Back} alt="" />
          </NavLink>
        )}
        <button className="new">New</button>
      </div>
    </div>
  );
}
export default PersonalPage;
