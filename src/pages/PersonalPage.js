import "./PersonalPage.css";
import icon from "../images/logov.png";
import Back from "../images/Back.png";
import { NavLink, useLocation } from "react-router-dom";

function PersonalPage() {
  const location = useLocation();
  const id = location.search.slice(4);
  console.log(id);

  return (
    <div className="pagelay">
      <div className="flex">
        <h1>{id === "personal" ? "My" : `${"Mary"}'s`} stats:</h1>
        {id !== "personal" && (
          <div className="flex2">
            <h2>Points: 30</h2>
            <img className="icon" src={icon} alt="" />
          </div>
        )}
      </div>

      <div>
        <table>
          <tbody>
            <tr>
              <td>Laptop usage</td>
              <td>80 kW</td>
            </tr>
            <tr>
              <td>Data usage</td>
              <td>60 MB</td>
            </tr>
            <tr>
              <td>Paper waste</td>
              <td>0.8 kg</td>
            </tr>
            <tr>
              <td>Ink usage</td>
              <td>0.6 ml</td>
            </tr>
          </tbody>
        </table>
        {id !== "personal" && (
          <NavLink className="back-btn" to={"/manager"}>
            <img src={Back} alt="" />
          </NavLink>
        )}
      </div>
    </div>
  );
}
export default PersonalPage;
