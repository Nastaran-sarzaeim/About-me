import React from "react";

function MyFriends({ friends, classList }) {
  return (
    <div>
      <h1 className="text-light-purple font-bold text-3xl m-5">My friends</h1>
      <div className="grid sm:grid-cols-4 w-full mt-9 grid-cols-2 ">
        {friends.map((item, index) => {
          while (index < 4) {
            return (
              <div className="m-4">
                <div
                  className={` bg-light-purple lg:w-9/12 ${
                    classList[index % classList.length]
                  }`}
                >
                  <img src={`./public/${item.name}.png`} />
                </div>
                <div className="text-center text-light-purple mt-2">
                  <p className="text-xl font-medium">{item.name}</p>
                  <p className="text-sm">{item.work}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default MyFriends;
