import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback, stateKeysArr }) => {
  return (
    <ul className={styles.list}>
      {stateKeysArr.map((feedback) => (
        <li key={feedback} className={styles.listItem}>
          <button
            className={styles.button}
            // onClick={() => onLeaveFeedback(feedback)}
            onClick={onLeaveFeedback}
          >
            {feedback}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  stateKeysArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
// _______________________________

// const FeedbackOptions = ({ onLeaveFeedback, stateKeysArr }) => {
//   return (
//     <ul className={styles.list}>
//       {stateKeysArr.map((feedback) => (
//         <li key={feedback} className={styles.listItem}>
//           <button
//             className={styles.button}
//             onClick={() => onLeaveFeedback(feedback)}
//           >
//             {feedback}
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// FeedbackOptions.propTypes = {
//   onLeaveFeedback: PropTypes.func.isRequired,
//   stateKeysArr: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// export default FeedbackOptions;
