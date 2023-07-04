import React, { useState } from "react";
import { useSelector } from "react-redux";

interface RootState {
  boards: string[];
}

const createNewTask = (e) => {};

const Dashboard = () => {
  const boards = useSelector((state: RootState) => state.boards);
  const col = boards[0].columns;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Todo");

  console.log(status);

  return (
    <>
      <div className=" bg-slate-200 w-fit h-screen">
        <div className="text-2xl text-dark-white font-bold grid gap-2  ml-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
          {col.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className={`flex justify-center items-center `}>
                <div
                  className={`rounded-full w-4 h-4 ${
                    item.name == "Todo"
                      ? "bg-red-500"
                      : item.name == "Doing"
                      ? "bg-purple-500"
                      : "bg-green-500"
                  } `}
                />
                ({item.name}) ({item.tasks.length})
              </div>
              {item.tasks.map((x, i) => {
                return (
                  <div
                    key={i}
                    className="rounded-sm bg-slate-400 hover:cursor-pointer hover:bg-slate-50"
                  >
                    <h1 className="text-2xl">Title: {x.title}</h1>
                    <span className="text-xl">
                      Description: {x.description}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/4 flex flex-col justify-center items-center">
        <div>
          <input
            type="text"
            placeholder="Title..."
            className=" border"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Description..."
            className=" border"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Status">Status:</label>
          <select
            name="Status"
            id="Status"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Todo">To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <h1 className=" text-xl hover: cursor-pointer" onClick={createNewTask}>
          Create new task
        </h1>
      </div>
    </>
  );
};

export default Dashboard;
