import React, { Dispatch } from "react";
import { ICompletedCarProps } from "../../Car/CompletedCar/CompletedCar";
import classes from "../CarList.module.css";
import CompletedCar from "../../Car/CompletedCar/CompletedCar";
import { connect } from "react-redux";
import { IRootState } from "../../../redux/rootState/rootState";
import Layout from "../../Layout/Layout";
import { CarAction, CompletedCarActionTypes } from "../../../redux/actions/actions";
interface ICompletedCarListProps {
  cars: ICompletedCarProps[];
  clearCars: () => void;
}

const CompletedCarList = ({ cars, clearCars }: ICompletedCarListProps) => {
  return (
    <Layout>
    <div className={classes.CarListWrapper}>
      <button className="btn btn-danger" onClick={clearCars}>Clear all cars</button>
      {cars.map((car) => {
        return <CompletedCar {...car}></CompletedCar>;
      })}
    </div>
    </Layout>
  );
};
const mapStateToProps = (state:IRootState) =>({
    cars: state.completedCars.cars  
})
const mapDispatchToProps = (dispatch:Dispatch<CarAction>) => ({
  clearCars: () => dispatch({type:CompletedCarActionTypes.clearCars})
})
export default connect(mapStateToProps, mapDispatchToProps)(CompletedCarList);
