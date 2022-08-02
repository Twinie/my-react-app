import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h4>
        {task.text}
        <FaTimes
          style={{
            color: "red",
            cursor: "pointer",
            display: "block",
            marginLeft: "auto",
          }}
          onClick={() => onDelete(task.id)}
        />
      </h4>

      <p>{task.day}</p>
    </div>
  );
};
export default Task;
