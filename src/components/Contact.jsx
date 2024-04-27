import React from "react";

function Contact({ friends, classList }) {
  const rowReverse = ["flex-row", "flex-row-reverse"];
  const backgroundColor = [
    "bg-light-purple",
    "bg-light-green",
    "bg-light-gray",
  ];
  const color = ["text-light-purple", "text-light-green", "text-light-gray"];
  return (
    <div>
      <h1 className="text-light-purple font-bold text-3xl text-center italic">
        My friends
      </h1>
      <div className="block m-9 ">
        {friends.map((item, index) => {
          return (
            <div>
              <div
                className={`flex justify-between items-center ${
                  rowReverse[index % rowReverse.length]
                }`}
              >
                <div className="m-4">
                  <div
                    className={` lg:w-9/12 ${
                      classList[index % classList.length]
                    } ${backgroundColor[index % backgroundColor.length]}`}
                  >
                    <img src={`./public/${item.name}.png`} />
                  </div>
                  <div className="text-center text-light-purple mt-2"></div>
                </div>
                <div className={` ml-10 my-20 ${color[index % color.length]}`}>
                  <p className="text-xl font-medium">{item.name}</p>
                  <p className="text-sm">{item.work}</p>
                  <p className="my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae atque odit accusantium consectetur enim nam saepe
                    quod, itaque, unde sint blanditiis doloribus dolor cum porro
                    autem libero vero, expedita ut!
                  </p>
                </div>
              </div>
              <hr className="border-light-purple border-2 rounded-3xl" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Contact;
