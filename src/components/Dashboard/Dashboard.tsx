import React from "react";

const Dashboard = () => {
  return (
    <div className=" bg-slate-200 w-screen  h-screen">
      <div className="text-2xl text-dark-white font-bold grid  ml-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        <div className="flex flex-col items-center overflow-hidden    ">
          <h2>To do</h2>
          <div>
            <p>
                desc
            </p>
          </div>
        </div>

        <div>
          <h2>Doing</h2>
          <p>Description</p>
        </div>

        <div>
          <h2>Done</h2>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
