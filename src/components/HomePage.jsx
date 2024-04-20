import Header from "./Header";
import Content from "./Content";

function HomePage() {
  return (
    <div className=" bg-background-main">
      <div className="h-screen">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default HomePage;
