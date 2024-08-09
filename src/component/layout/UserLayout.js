import React from "react";
import { Button } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/slice/todo";

const Userlayout = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("state", state);
  if (state.todo.isLoading) {
    return <h1 className="font-bold ">Loading.......</h1>;
  }
  return (
    <div className="text-gray-700 font-bold justify-center ">
      <Button onClick={(e) => dispatch(fetchTodos())}>Fetch Todos</Button>
      {state.todo.data?.map((e) => (
        <li>{e.title}</li>
      ))}
    </div>
  );
};
export default Userlayout;
