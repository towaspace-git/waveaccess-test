import React, { Dispatch, useEffect } from "react";
import { ICompletedCarProps } from "../../Car/CompletedCar/CompletedCar";
import classes from "../CarList.module.css";
import CompletedCar from "../../Car/CompletedCar/CompletedCar";
import { connect } from "react-redux";
import { IRootState } from "../../../redux/rootState/rootState";
import Layout from "../../Layout/Layout";
import {
  CarAction,
  CompletedCarActionTypes,
} from "../../../redux/actions/actions";
import { setStateToLocalStorage } from "../../../common/localStorage/localStorage";
import { IActiveCarProps } from "../../Car/ActiveCar/ActiveCar";
interface ICompletedCarListProps {
  cars: ICompletedCarProps[];
  activeCars: IActiveCarProps[];
  clearCars: () => void;
}

const CompletedCarList = ({ cars, activeCars, clearCars }: ICompletedCarListProps) => {
  useEffect(() => {
    console.log("setLocalStorage");
    setStateToLocalStorage("active", {cars: activeCars});
    setStateToLocalStorage("completed", { cars });
  }, [cars, activeCars]);
  return (
    <Layout>
      <div className={classes.CarListWrapper}>
        {cars.length ? (
          <>
            <button className="btn btn-danger" onClick={clearCars}>
              Clear all cars
            </button>
            {cars.map((car) => {
              return <CompletedCar key={car.id} {...car} />;
            })}
          </>
        ) : (
          <h2>There is no completed cars</h2>
        )}
      </div>
    </Layout>
  );
};
const mapStateToProps = (state: IRootState) => ({
  cars: state.completedCars.cars,
  activeCars: state.activeCars.cars
});
const mapDispatchToProps = (dispatch: Dispatch<CarAction>) => ({
  clearCars: () => dispatch({ type: CompletedCarActionTypes.clearCars }),
});
export default connect(mapStateToProps, mapDispatchToProps)(CompletedCarList);
