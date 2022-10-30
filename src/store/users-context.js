import React from "react";

const UsersContext = React.createContext({
  employees: [],
  personal: {},
});

export const UsersContextProvider = (props) => {
  const contextValue = {
    employeesGuidelines: [
      "Laptop Usage",
      "Data Usage",
      "Paper Waste",
      "Ink Usage",
    ],
    employees: [
      {
        id: 1,
        img: "http://happyfacesparty.com/wp-content/uploads/2019/06/avataaars-Brittany.png",
        name: "Mary Smith",
        points: 30,
        scores: ["80kW", "60MB", "0.8kg", "0.6ml"],
      },
      {
        id: 2,
        img: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
        name: "John Doe",
        points: 27,
        scores: ["94kW", "80MB", "0.3kg", "0.7ml"],
      },
      {
        id: 3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPOSsH_ltKYZAUB3nMmYlfn4uvgWlxukATxg&usqp=CAU",
        name: "Anna Forger",
        points: 20,
        scores: ["100kW", "130MB", "1.5kg", "0.6ml"],
      },
      {
        id: 4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReizZaC0kgcwsRUro3wILVD17kxj5yV7eK7QV4vdOfDhnqqHuxha5z0GxIK2DQsFCifDk&usqp=CAU",
        name: "Mark Cooper",
        points: 25,
        scores: ["90kW", "80MB", "1.2kg", "0.6ml"],
      },
    ],
    personal: {
      guidelines: [
        "TV Usage",
        "Data usage",
        "Light usage",
        "Water usage",
        "Phone Charging Energy Usage",
        "Laptop Usage",
        "Computer Usage",
        "Printer Usage",
        "Paper Waste",
        "Plastic Waste",
        "Custom device: Fridge Energy",
        "Custom device: Dishwasher Usage",
      ],
      scores: [
        "15kW",
        "45MB",
        "32kW",
        "64l",
        "30kW",
        "56kW",
        "86kW",
        "60kW",
        "0.8kg",
        "0.6kg",
        "40kW",
        "90kW",
      ],
    },
  };

  return (
    <UsersContext.Provider value={contextValue}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
