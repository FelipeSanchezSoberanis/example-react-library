import "./App.css";
import { TestButton  } from "library/components";
import { TextField, Switch } from "@mui/material";

function App() {
  return (
    <div style={{ display: "flex", columnGap: "1rem" }}>
      <TestButton />
      <TextField size="small" focused />
      <Switch defaultChecked />
    </div>
  );
}

export default App;
