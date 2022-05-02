import logo from "./logo.svg";
import "./App.css";
// import "react-notifications/lib/notifications.css";
import "./notificationsCustom.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => NotificationManager.info("Info message")}>
          Heyyy
        </button>
      </header>
      <NotificationContainer />
    </div>
  );
}

export default App;
