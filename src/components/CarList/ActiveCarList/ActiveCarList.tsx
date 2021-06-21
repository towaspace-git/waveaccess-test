import React, { Dispatch } from "react";
import classes from "../CarList.module.css";
import ActiveCar from "../../Car/ActiveCar/ActiveCar";
import { IActiveCarProps } from "../../Car/ActiveCar/ActiveCar";
import { connect } from "react-redux";
import { IRootState } from "../../../redux/rootState/rootState";
import {
  ActiveCarActionTypes,
  CompletedCarActionTypes,
  IActiveCarAction,
  CarAction
} from "../../../redux/actions/actions";
import Layout from "../../Layout/Layout";

interface IActiveCarListProps {
  cars: IActiveCarProps[];
  completeCar: (car: IActiveCarProps) => void;
}

const ActiveCarList = ({ cars, completeCar }: IActiveCarListProps) => {
  console.log(cars);
  return (
    <Layout>
      <div className={classes.CarListWrapper}>
        {cars.map((car) => {
          return (
            <ActiveCar {...car} onClick={() => completeCar(car)}></ActiveCar>
          );
        })}
      </div>
    </Layout>
  );
};

const mapStateToProps = (state: IRootState) => ({
  cars: state.activeCars.cars,
});
const mapDispatchToProps = (dispatch: Dispatch<CarAction>) => ({
  completeCar: (car: IActiveCarProps) => {
    dispatch({ type: ActiveCarActionTypes.removeCar, payload: car });
    dispatch({type:CompletedCarActionTypes.completeCar, payload: {...car, carCompleteDate: new Date().toDateString()}})
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(ActiveCarList);
