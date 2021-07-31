import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({
  allFeedbacksObj,
  total,
  positivePercentage,
  stateKeysArr,
}) => {
  return (
    <ul>
      {stateKeysArr.map((feedback) => (
        <li key={feedback} className={styles.listItem}>
          <span>
            {feedback}:{allFeedbacksObj[feedback]}
          </span>
        </li>
      ))}
      <li className={styles.listItem}>Total:{total}</li>
      <li className={styles.listItem}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  allFeedbacksObj: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  stateKeysArr: PropTypes.arrayOf(PropTypes.string.isRequired),
};
export default Statistics;
