import React from "react";
import ListCategories from "../../components/ListCategories";
import ListTasks from "../../components/ListTasks";
import Header from "../../components/Header";

function Reminder() {
  return (
    <div className="reminder">
      <Header />
      <div className="todo-list">
        <ListCategories />
        <ListTasks />
      </div>
    </div>
  );
}

export default Reminder;
