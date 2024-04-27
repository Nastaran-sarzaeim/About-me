import Content from "./Content";
import Footer from "./Footer";
import MyFriends from "./MyFriends";

function HomePage({ friends, classList }) {
  return (
    <div>
      <div className="h-screen">
        <Content />
        <MyFriends classList={classList} friends={friends} />
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
