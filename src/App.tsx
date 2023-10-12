import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { useSelector } from "react-redux";
import { selectPages } from "./store/features/pagesSlice";
import { CustomPage } from "./pages/CustomPage/CustomPage";

function App() {
  let pages = useSelector(selectPages);

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/home" />} />
      {pages.map((el, idx) => {
        return (
          <Route
            key={idx}
            path={`/${el.path}`}
            element={<CustomPage data={el} />}
          />
        );
      })}
    </Routes>
  );
}

export default App;
