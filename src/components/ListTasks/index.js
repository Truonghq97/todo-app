import React, { useState } from "react";
import { FaChevronLeft, FaEllipsisH } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  editTask,
  showListCategories,
} from "../../features/reminderSlice";
import "./ListTasks.css";

function ListTasks() {
  const [isDisplayInput, setIsDisplayInput] = useState(false);
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [isShowListCategories, setIsShowListCategories] = useState(true);
  const dispatch = useDispatch();
  
  const filteredCategory = useSelector(
    (state) => state.reminder.filteredCategory
  );

  const handleToggleText = () => {
    setIsDisplayInput(!isDisplayInput);
  };

  const handleAddNew = (e) => {
    if (e.key === "Enter") {
      const newTask = {
        value: e.target.value,
        idx: filteredCategory.id,
      };
      dispatch(addTask(newTask));

      setIsDisplayInput(false);
    }
  };

  const handleShowListCategories = () => {
    setIsShowListCategories(!isShowListCategories);
    dispatch(showListCategories(isShowListCategories));
  };

  return (
    <div className="task-item">
      <div className="task-item__icon" onClick={handleShowListCategories}>
        <FaChevronLeft />
        <p>Lists</p>
      </div>
      <div className="task-item__header">
        {filteredCategory.hasOwnProperty("name") && (
          <div className="header-name">
            <h3>{filteredCategory.name}</h3>
          </div>
        )}
        <div className="header-option">
          <FaEllipsisH className="option-icon" />
        </div>
      </div>
      <div className="task-item__content">
        {filteredCategory.hasOwnProperty("listTasks") &&
          filteredCategory.listTasks.map((item, id) => (
            <div className="content-task" key={id}>
              <input
                type="text"
                value={item}
                className="task-text"
                onChange={(e) =>
                  dispatch(
                    editTask({
                      value: e.target.value,
                      categoryId: filteredCategory.id,
                      idx: id,
                    })
                  )
                }
              />
              <MdDeleteForever
                className="icon-delete"
                onClick={() =>
                  dispatch(
                    deleteTask({ categoryId: filteredCategory.id, idx: id })
                  )
                }
              />
            </div>
          ))}

        {isDisplayInput && (
          <div className="task-item__add">
            <br />
            <input
              type="text"
              className="task-item__text"
              required
              value={newTaskDescription}
              onChange={(e) =>
                setNewTaskDescription(e.target.newTaskDescription)
              }
              onKeyPress={(e) => handleAddNew(e)}
            />
            <span className="task-item__label">Add new ...</span>
          </div>
        )}
      </div>
      <div className="task-item__add" onClick={handleToggleText}>
        <BsPlusCircleFill />
        <p>New Task</p>
      </div>
    </div>
  );
}

export default ListTasks;
