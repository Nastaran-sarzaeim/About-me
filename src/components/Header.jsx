function Header() {
  return (
    <>
      <div className="flex justify-between items-center h-16 bg-cat">
        <p className="text-3xl ml-4 text-light-green cursor-pointer">
          N a s t a r a n
        </p>
        <div>
          <img src="./public/hamburger.svg" className="flex sm:hidden"/>
        </div>
        <ul className="hidden list-none sm:flex">
          <li className="sm:mr-6 lg:mr-20 hover:text-light-green cursor-pointer">
            Home
          </li>

          <li className="sm:mr-6 lg:mr-20 hover:text-light-green cursor-pointer">
            Connect Me
          </li>

          <li className="sm:mr-6 lg:mr-20 hover:text-light-green cursor-pointer">
            Works
          </li>

          <li className="sm:mr-6 lg:mr-20 hover:text-light-green cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
