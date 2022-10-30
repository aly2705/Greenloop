import "./ManagerPage.css";
import Employee from "../components/Employees/Employee";
import UsersContext from "../store/users-context";
import { useContext } from "react";

function ManagerPage() {
  const employees = useContext(UsersContext).employees;
  return (
    <div className="divmare">
      <h1 className="greeting">Welcome, Michael!</h1>
      <p id="t1">Your employees:</p>
      <div className="emp">
        {employees.map((emp, i) => (
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
