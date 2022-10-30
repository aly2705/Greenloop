import "./ManagerPage.css";
import Mary from "../images/maryav.png";
import John from "../images/johnav.png";
import Mark from "../images/markav.png";
import Anna from "../images/annav.png";
import Employee from "../components/Employees/Employee";

const DUMMY_EMPLOYEES = [
  { id: 1, img: Mary, name: "Mary Smith", points: 30 },
  { id: 2, img: John, name: "John Doe", points: 27 },
  { id: 3, img: Anna, name: "Anna Forger", points: 20 },
  { id: 4, img: Mark, name: "Mark Cooper", points: 25 },
];

function ManagerPage() {
  return (
    <div className="divmare">
      <h1 className="greeting">Welcome, Michael!</h1>
      <p id="t1">Your employees:</p>
      <div className="emp">
        {DUMMY_EMPLOYEES.map((emp, i) => (
          <Employee
            key={i}
            id={emp.id}
            img={emp.img}
            name={emp.name}
            points={emp.points}
          />
        ))}
      </div>
    </div>
  );
}

export default ManagerPage;
