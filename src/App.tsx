import React from "react";
import ActiveCar from "./components/Car/ActiveCar/ActiveCar";
import ActiveCarList from "./components/CarList/ActiveCarList/ActiveCarList";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import CompletedCarList from "./components/CarList/CompletedCarList/CompletedCarList";
function App() {
  return (
    <BrowserRouter>
      <Redirect from="/waveaccess-test/" to="/waveaccess-test/active"></Redirect>
      <Route path="/waveaccess-test/active" exact>
        <ActiveCarList></ActiveCarList>
      </Route>
      <Route path="/waveaccess-test/completed" exact>
        <CompletedCarList></CompletedCarList>
      </Route>
    </BrowserRouter>
  );
}

export default App;
