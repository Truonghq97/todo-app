import React, { useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, filteredCategory } from "../../features/reminderSlice";
import "./ListCategories.css";

function ListCategories() {
  const [isDisplayInput, setIsDisplayInput] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reminder.data);
  const showListCategories = useSelector(
    (state) => state.reminder.isShowListCategories
  );

  const handleToggleText = () => {
    setIsDisplayInput(!isDisplayInput);
  };

  const handleAddNew = (e) => {
    if (e.key === "Enter") {
      const newCategory = {
        id: data.length,
        name: e.target.value,
        listTasks: [],
      };
      dispatch(addCategory(newCategory));
      setIsDisplayInput(false);
    }
  };

  const handleClickCategory = (e) => {
    dispatch(filteredCategory(e));
  };

  return (
    <div className={showListCategories ? "task-list click" : "task-list"}>
      <div className="task-list__content">
        {data.map((task, index) => {
          return (
            <div
              key={index}
              className="task-list__name"
              onClick={(e) => handleClickCategory(index)}
            >
              <h4>
                <span className="task-list__icon">
                  <AiOutlineUnorderedList className="option__icon" />
                </span>
                {task.name}
              </h4>
            </div>
          );
        })}
        {isDisplayInput && (
          <div className="task-list__add">
            <br />
            <input
              type="text"
              className="task-list__text"
              required
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.newCategory)}
              onKeyPress={(e) => handleAddNew(e)}
            />
            <span className="task-list__label">Add new ...</span>
          </div>
        )}
      </div>
      <div className="task-list__add" onClick={handleToggleText}>
        <BsPlusCircleFill />
        <p>New Category</p>
      </div>
    </div>
  );
}

export default ListCategories;
