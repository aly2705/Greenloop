import "./personalpage.css";
import Logo from "../images/logov.png";
import Back from "../images/Back.png";

function PersonalPage() {
  return (
    <div className="pagelay">
      <div className="flex">
        <h1>Mary's stats:</h1>
        <div class="flex2">
          <h2>Points: 30</h2>
          <img class="icon" src={Logo} alt="" />
        </div>
      </div>

      <div>
        <table>
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
        </table>
        <button><img src={Back} alt=""/></button>
      </div>
    </div>
  );
}
export default PersonalPage;
