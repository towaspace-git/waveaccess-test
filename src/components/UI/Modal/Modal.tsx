import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {
  ActiveCarActionTypes,
  IActiveCarAction,
} from "../../../redux/actions/actions";
import { IActiveCarProps } from "../../Car/ActiveCar/ActiveCar";
import {generateId} from '../../../common/idGenerator/idGenerator'
interface IModalProps {
  addCar: (car: IActiveCarProps) => void;
}
const Modal = ({ addCar }: IModalProps) => {
  const [carNameValue, setCarNameValue] = useState<string>("");
  const [carProblemValue, setCarProblemValue] = useState<string>("");
  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (event.target.id) {
      case "carNameInput": {
        setCarNameValue(event.target.value);
        break;
      }
      case "carProblemTextArea": {
        setCarProblemValue(event.target.value);
        break;
      }
      default:
        break;
    }
  };
  const clickHandler = () => {
    const car: IActiveCarProps = {
      id: generateId(),
      carArrivalDate: new Date().toDateString(),
      carName: carNameValue,
      carProblem: carProblemValue,
    };
    const modal = document.getElementById("modal");
    let forms = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event: React.ChangeEvent) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
    if (carNameValue && carProblemValue) {
      addCar(car);
      setCarNameValue("");
      setCarProblemValue("");
    }
    
  };
  return (
    <div
      className="modal fade"
      id="modal"
      tabIndex={-1}
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalLabel">
              Add New Car
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="column g-3 needs-validation" id="addCarForm">
              <div className="mb-3">
                <label htmlFor="carNameInput" className="form-label">
                  Car name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="carNameInput"
                  placeholder="Car name"
                  value={carNameValue}
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="carProblemTextArea" className="form-label">
                  Car problem:
                </label>
                <textarea
                  className="form-control"
                  id="carProblemTextArea"
                  rows={4}
                  value={carProblemValue}
                  onChange={changeHandler}
                  required
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              form="addCarForm"
              className="btn btn-success"
              data-bs-dismiss={carNameValue && carProblemValue ? "modal" : null}
              onClick={clickHandler}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch: Dispatch<IActiveCarAction>) => ({
  addCar: (car: IActiveCarProps) =>
    dispatch({ type: ActiveCarActionTypes.addCar, payload: car }),
});
export default connect(null, mapDispatchToProps)(Modal);
