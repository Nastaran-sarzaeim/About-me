import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import MyFriends from "./MyFriends";

function HomePage() {
  return (
    <div className=" bg-background-main">
      <div className="h-screen">
        <Header />
        <Content />
        <MyFriends/>
        <hr />
        <Footer/>
      </div>
    </div>
  );
}

export default HomePage;
