import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/boardsSlice";
import { v4 as uuidv4 } from "uuid";

interface RootState {
  boards: string[];
}



const Dashboard = () => {
  const dispatch = useDispatch()
  
  const boards = useSelector((state: RootState) => state.boards);
  
  const col = boards[0].columns;
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Todo");
  const canSave = Boolean(title) && Boolean(description) && Boolean(status)
  const [newColumns, setNewColumns] = useState([
    { name: "Todo", tasks: [], id: uuidv4() },
    { name: "Doing", tasks: [], id: uuidv4() },
  ]);


  const onTitleChanged = e => setTitle(e.target.value)
  const onDescriptionChanged = e => setDescription(e.target.value)
  const onStatusChanges = e => setStatus(e.target.value)

  const createNewTask = (e) => {
    
    if (title && description) {
      dispatch(
        addTask({title,description,status})
      )
    }
  };

  return (
    <>
      <div className=" bg-slate-200 w-fit overflow-y-auto h-screen  ">
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

      <div className="w-1/4 flex justify-center items-center ">
        <form className="border-2 p-2 m-4 flex flex-col">
          <div>
            <input
              type="text"
              placeholder="Title..."
              className=" border"
              onChange={onTitleChanged}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Description..."
              className=" border"
              onChange={onDescriptionChanged}
            />
          </div>
          <div>
            <label htmlFor="Status">Status:</label>
            <select
              name="Status"
              id="Status"
              onChange={onStatusChanges}
            >
              <option value="Todo">To do</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <button
            type="button"
            className="rounded-full p-2 bg-slate-400 text-xl cursor-pointer "
            onClick={createNewTask}
            disabled={!canSave}
          >
            Create new task
          </button>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
