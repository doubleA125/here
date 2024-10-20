import styles from "./RecordList.module.css";
import CalorieRecord from "./components/CalorieRecord";

function RecordList(props) {
  if (!props.records) return null;

  return (
    <ul className={styles.recordList}>
      {props.records.map((record, index) => (
        <li key={index} className={styles.listItem}>
          <CalorieRecord
            date={record.date}
            meal={record.meal}
            content={record.content}
            calories={record.calories}
          />
        </li>
      ))}
    </ul>
  );
}

export default RecordList;
