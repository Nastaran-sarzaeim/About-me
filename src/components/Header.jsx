import { Link } from "react-router-dom";

function Header() {

  return (
    <>
      <div className="flex justify-between items-center h-16 bg-cat ">
        <Link to='/home' className="text-3xl ml-4 text-light-green cursor-pointer">
          N a s t a r a n
        </Link>
        <div>
          <img src="./public/hamburger.svg" className="flex sm:hidden" />
        </div>
        <ul className="hidden list-none sm:flex">
          <Link to='/' className="sm:mr-6 lg:mr-20 hover:text-light-green cursor-pointer">
            Home
          </Link>
          <Link className="sm:mr-6 lg:mr-20 hover:text-light-green cursor-pointer">
            Connect Me
          </Link>
          <Link to='/works' className="sm:mr-6 lg:mr-20 hover:text-light-green cursor-pointer">
            Works
          </Link>
          <Link to='contact' className="sm:mr-6 lg:mr-20 hover:text-light-green cursor-pointer">
            Contact
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
