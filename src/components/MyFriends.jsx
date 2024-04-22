import React from "react";

const classList = [
  "rounded-tl-[200px] rounded-bl-[200px] rounded-tr-[300px] rounded-br-[100px]",
  "rounded-tl-[700px] rounded-bl-[300px] rounded-tr-[200px] rounded-br-[500px] ",
  "rounded-tl-[400px] rounded-bl-[400px] rounded-tr-[300px] rounded-br-[100px] ",
  "rounded-bl-[500px] rounded-tl-[30px] rounded-tr-[300px] rounded-br-[100px]",
  "rounded-tl-[200px] rounded-bl-[300px] rounded-tr-[100px] rounded-br-[800px] ",
  "rounded-bl-[100px] rounded-tl-[500px] rounded-tr-[100px] rounded-br-[30px]",
];
const friends = [
  { name: "Alma", work: "Developer", id: 1 },
  { name: "Anna", work: "Artchitect", id: 2 },
  { name: "kate", work: "Engineer", id: 3 },
  { name: "Jason", work: "Doctor", id: 4 },
];
function MyFriends() {
  return (
    <div>
      <h1 className="text-light-purple font-bold text-3xl m-5">My friends</h1>
      <div className="grid sm:grid-cols-4 w-full mt-9 grid-cols-2 ">
        {friends.map((item, index) => {
          return (
            <div className="m-4">
              <div className={` bg-light-purple lg:w-9/12 ${classList[index % classList.length]}`}>
                <img src={`./public/${item.name}.png`} />
              </div>
              <div className="text-center text-light-purple mt-2">
                <p className="text-xl font-medium">{item.name}</p>
                <p className="text-sm">{item.work}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyFriends;
