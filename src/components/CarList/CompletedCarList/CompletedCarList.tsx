import React, { Dispatch } from "react";
import { ICompletedCarProps } from "../../Car/CompletedCar/CompletedCar";
import classes from "../CarList.module.css";
import CompletedCar from "../../Car/CompletedCar/CompletedCar";
import { connect } from "react-redux";
import { IRootState } from "../../../redux/rootState/rootState";
import Layout from "../../Layout/Layout";
interface ICompletedCarListProps {
  cars: ICompletedCarProps[];
}

const CompletedCarList = ({ cars }: ICompletedCarListProps) => {
  return (
    <Layout>
    <div className={classes.CarListWrapper}>
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
export default connect(mapStateToProps)(CompletedCarList);
