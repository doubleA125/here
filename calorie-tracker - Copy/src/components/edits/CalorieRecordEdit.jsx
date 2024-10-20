import { useState, useEffect, useContext } from "react";
import "./CalorieRecordEdit.css";
import ClickCounter from "./clickerCounter";
import CalorieRecord from "../CalorieRecord";
import AppContext from "./app-context.ts";

function CalorieRecordEdit(props) {
  const DEFAULT_VALUE = {
    meal: "",
    content: "",
    date: "",
    calories: 0,
  };

  const [mealrecord, setMealRecord] = useState(DEFAULT_VALUE);
  const [clickCounter, setClickCounter] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const { currentDate, setCurrentDate } = useContext(AppContext);

  useEffect(() => {
    const isValid =
      mealrecord.meal &&
      mealrecord.content &&
      mealrecord.date &&
      mealrecord.calories > 0;
    setIsFormValid(isValid);
  }, [mealrecord]);

  const onCaloriesChangeHandler = (e) => {
    setMealRecord({
      ...mealrecord,
      calories: Number(e.target.value),
    });
  };

  const onContentChangeHandler = (e) => {
    setMealRecord({
      ...mealrecord,
      content: e.target.value,
    });
  };

  const onMealChangeHandler = (e) => {
    setMealRecord({
      ...mealrecord,
      meal: e.target.value,
    });
  };

  const onDateChangeHandler = (e) => {
    setMealRecord({
      ...mealrecord,
      date: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (isFormValid) {
      props.onSubmitHandler(mealrecord);
      setMealRecord(DEFAULT_VALUE);
      setCurrentDate(new Date());
    }
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <button onClick={openForm}>Open Form</button>
      {isFormOpen && (
        <div>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              opacity: 0.4,
              zIndex: 1000,
            }}
            onClick={closeForm}
          />
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              zIndex: 1001,
              width: "300px",
            }}
          >
            <h2>Fill in the Form</h2>
            <form onSubmit={onSubmitHandler}>
              <div>
                <label>I got Clicked {clickCounter} times</label>
              </div>
              <div className="we">
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  id="date"
                  value={mealrecord.date}
                  onChange={onDateChangeHandler}
                />
                <label htmlFor="meal">Meal:</label>
                <select
                  id="meal"
                  value={mealrecord.meal}
                  onChange={onMealChangeHandler}
                >
                  <option value="">Select</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Snack">Snack</option>
                </select>
                <label htmlFor="content">Content: </label>
                <input
                  type="text"
                  id="content"
                  value={mealrecord.content}
                  onChange={onContentChangeHandler}
                />
                <label htmlFor="calorie">Calories: </label>
                <input
                  type="number"
                  id="calorie"
                  value={mealrecord.calories}
                  onChange={onCaloriesChangeHandler}
                  min={0}
                  style={
                    mealrecord.calories < 0
                      ? {
                          border: "1px solid red",
                          backgroundColor: "black",
                          color: "red",
                        }
                      : {}
                  }
                />
              </div>
              <div className="footer">
                <button type="submit" disabled={!isFormValid}>
                  Add record
                </button>
                <ClickCounter counterHandler={setClickCounter} />
                <button type="button" onClick={closeForm}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalorieRecordEdit;
