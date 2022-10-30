import "./selfpage.css";
import Logo from "../images/logov.png";
import Back from "../images/Back.png";


function SelfPage(){
    return (
        <div className="pagelay">
          <div className="flex">
            <h1>Your stats:</h1>
            <div class="flex2">
              <h2>Points: 47</h2>
              <img class="icon" src={Logo} alt="" />
            </div>
          </div>
    
          <div>
            <table>
              <tr>
                <td>TV usage</td>
                <td>150 kW</td>
              </tr>
              <tr>
                <td>Data usage</td>
                <td>450 MB</td>
              </tr>
              <tr>
                <td>Light usage</td>
                <td>320 kW</td>
              </tr>
              <tr>
                <td>Water usage</td>
                <td>64 l</td>
              </tr>
              <tr>
                <td>Phone charging usage</td>
                <td>300 kW</td>
              </tr>
              <tr>
                <td>Laptop usage </td>
                <td>560 kW</td>
              </tr>
              <tr>
                <td>Computer usage</td>
                <td>860 kW</td>
              </tr>
              <tr>
                <td>Printer usage</td>
                <td>60 kW</td>
              </tr>
              <tr>
                <td>Paper waste</td>
                <td>0.8 kg</td>
              </tr>
              <tr>
                <td>Plastic waste</td>
                <td>0.6 kg</td>
              </tr>
              <tr>
                <td>Custom device: Fridge usage</td>
                <td>400 kW</td>
              </tr>
              <tr>
                <td>Custom device: Dishwasher usage </td>
                <td>90kW</td>
              </tr>
              
            </table>
           
          </div>
        </div>
      );
}
export default SelfPage;