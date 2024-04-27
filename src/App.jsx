import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SharedLayout from "./components/SharedLayout";
import Contact from "./components/Contact";
import Works from "./components/Works";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
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
    { name: "Alma", work: "Developer", id: 1 },
    { name: "Anna", work: "Artchitect", id: 2 },
    { name: "kate", work: "Engineer", id: 3 },
    { name: "Jason", work: "Doctor", id: 4 },
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={<HomePage classList={classList} friends={friends} />}
            />
            <Route
              path="contact"
              element={<Contact classList={classList} friends={friends} />}
            />
            <Route path="/works" element={<Works />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
