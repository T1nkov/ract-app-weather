import React from "react";
import ElemSelection from "./components/ElemSelection/ElemSelection";
import dataCity from "../src/components/countries.json";
export type weatherType = {
  api_key: string;
  dataCity: object;
};

const api_key = "963e0eb87af71955ff09f4fbfaf52742";
const data = dataCity;

class App extends React.Component {
  gettingData = () => {
    Object.values(data).flat();
    return;
  };
  render() {
    return (
      <div>
        <ElemSelection />
      </div>
    );
  }
}

export default App;
