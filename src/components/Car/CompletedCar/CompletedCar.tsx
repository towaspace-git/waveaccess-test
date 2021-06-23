import { IActiveCarProps } from "../ActiveCar/ActiveCar";
export interface ICompletedCarProps extends IActiveCarProps {
  carCompleteDate: string;
}
const CompletedCar = ({
  carArrivalDate,
  id,
  carCompleteDate,
  carName,
  carProblem,
}: ICompletedCarProps) => {
  return (
    <div className="card m-3" style={{ width: "100%" }}>
      <div className="card-body">
        <h5 className="card-title">{carName}</h5>
        <p className="card-text">{carProblem}</p>
      </div>
      <div className="card-footer text-muted">
        <span>Arrived: {carArrivalDate}</span>
        <br></br>
        <span>Done: {carCompleteDate}</span>
      </div>
    </div>
  );
};

export default CompletedCar;
