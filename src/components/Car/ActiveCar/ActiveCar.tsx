export interface IActiveCarProps{
  id: number;
  carName:string;
  carProblem:string;
  carArrivalDate:string;
  onClick?:() => void;
}
const ActiveCar = ({
  id,
  carName,
  carArrivalDate,
  carProblem,
  onClick
}: IActiveCarProps) => {
  return (
    <div className="card m-3" style={{width:"100%"}}>
      <div className="card-body">
        <h5 className="card-title">{carName}</h5>
        <p className="card-text">{carProblem}</p>
        <button className="btn btn-primary" onClick={onClick}>Done!</button>
      </div>
      <div className="card-footer text-muted"><span>Arrived: {carArrivalDate}</span></div>
    </div>
  );
};

export default ActiveCar;
