import "./App.css";
import MainDashboard from "./component/MainDashboard/MainDashboard";
import { RightSide } from "./component/RightSide/RightSide";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDashboard />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
