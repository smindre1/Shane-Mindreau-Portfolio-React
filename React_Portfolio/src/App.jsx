import "./App.css";
import Header from "./components/Header";
import { Outlet } from 'react-router-dom';
import PhoneMenu from "./components/PhoneMenu";

function App() {
  return (
    <div className="mainPage">
      <Header />
      <Outlet />
      <PhoneMenu />
    </div>
  );
}

export default App;