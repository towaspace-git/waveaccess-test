import React, { Dispatch, useEffect } from "react";
import classes from "../CarList.module.css";
import ActiveCar from "../../Car/ActiveCar/ActiveCar";
import { IActiveCarProps } from "../../Car/ActiveCar/ActiveCar";
import { connect } from "react-redux";
import { IRootState } from "../../../redux/rootState/rootState";
import {
  ActiveCarActionTypes,
  CompletedCarActionTypes,
  CarAction,
} from "../../../redux/actions/actions";
import Layout from "../../Layout/Layout";
import { setStateToLocalStorage } from "../../../common/localStorage/localStorage";
import { ICompletedCarProps } from "../../Car/CompletedCar/CompletedCar";

interface IActiveCarListProps {
  cars: IActiveCarProps[];
  completedCars: ICompletedCarProps[];
  completeCar: (car: IActiveCarProps) => void;
}

const ActiveCarList = ({
  cars,
  completedCars,
  completeCar,
}: IActiveCarListProps) => {
  useEffect(() => {
    console.log("setLocalStorage");
    setStateToLocalStorage("active", { cars });
    setStateToLocalStorage("completed", { cars: completedCars });
  }, [cars]);
  return (
    <Layout>
      <div className={classes.CarListWrapper}>
        {cars.length ? (
          <>
            {cars.map((car) => {
              return (
                <ActiveCar
                  key={car.id}
                  {...car}
                  onClick={() => completeCar(car)}
                />
              );
            })}
          </>
        ) : (
          <h2>Add an active car to show it here</h2>
        )}
      </div>
    </Layout>
  );
};

const mapStateToProps = (state: IRootState) => ({
  cars: state.activeCars.cars,
  completedCars: state.completedCars.cars,
});
const mapDispatchToProps = (dispatch: Dispatch<CarAction>) => ({
  completeCar: (car: IActiveCarProps) => {
    dispatch({ type: ActiveCarActionTypes.removeCar, payload: car });
    dispatch({
      type: CompletedCarActionTypes.completeCar,
      payload: { ...car, carCompleteDate: new Date().toDateString() },
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ActiveCarList);
