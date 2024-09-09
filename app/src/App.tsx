import "./App.css";
import { TestButton } from "@felipesanchezsoberanis/library/components";
import { TextField, Switch } from "@mui/material";

function App() {
  return (
    <div style={{ display: "flex", columnGap: "1rem" }}>
      <TestButton hello="hola" name="felipe" />
      <TextField size="small" focused />
      <Switch defaultChecked />
    </div>
  );
}

export default App;
