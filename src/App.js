import Users from "./Users";
import Error from "./Error";
import Home from "./Home";
import "./index.css"
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div >
      <ErrorBoundary>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="Users" element={<Users />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}
export default App;
