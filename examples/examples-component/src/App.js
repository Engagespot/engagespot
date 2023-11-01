import { SimpleNotification } from './simpleNotification/SimpleNotification';
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";
setBasePath("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.8.0/cdn/");
import './App.css';


function App() {
  return (
    <div className="App">
      <SimpleNotification />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
