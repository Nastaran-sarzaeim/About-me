import React from "react";

function Footer() {
  return (
    <div>
      <div className="grid md:grid-cols-6 grid-cols-3 justify-around m-6">
        <div className="flex items-center">
          <img src="./public/telegram.svg" className="w-8 mr-4" />
          <p className="text-light-purple">Telegram</p>
        </div>
        <div className="flex items-center">
          <img src="./public/github.svg" className="w-8 mr-4" />
          <p className="text-light-purple">Github</p>
        </div>
        <div className="flex items-center">
          <img src="./public/linkedin.svg" className="w-8 mr-4" />
          <p className="text-light-purple">linkedin</p>
        </div>
        <div className="flex items-center">
          <img src="./public/discord.svg" className="w-8 mr-4" />
          <p className="text-light-purple">Discord</p>
        </div>
        <div className="flex items-center">
          <img src="./public/dribbble.svg" className="w-8 mr-4" />
          <p className="text-light-purple">Email</p>
        </div>
        <div className="flex items-center">
          <img src="./public/pinterest.svg" className="w-8 mr-4" />
          <p className="text-light-purple">Pinterest</p>
        </div>
      </div>
      <p className="ml-10 text-sm text-center">
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting®
      </p>
    </div>
  );
}

export default Footer;
