import "./App.css";
import { Button } from "library/components";
import { TextField, Switch } from "@mui/material";

function App() {
  return (
    <div style={{ display: "flex", columnGap: "1rem" }}>
      <Button />
      <TextField size="small" focused />
      <Switch defaultChecked />
    </div>
  );
}

export default App;
