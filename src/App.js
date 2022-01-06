import "./app.css";
import Navbar from "./Navbar";
import Heropage from "./Heropage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="heropage">
        <Heropage />
      </div>
    </div>
  );
}

export default App;
