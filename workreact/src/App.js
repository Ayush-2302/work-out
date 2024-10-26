import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BodyPart from "./layout/BodyPart";
import TargetDetails from "./component/TargetDetails";
import EquipmentDetails from "./layout/EquipmentDetails";
import ExerciseDetails from "./layout/ExerciseDetails";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route
          exact
          path="/exercises/bodyPart/:bodyPart"
          element={<BodyPart />}
        />
        <Route
          exact
          path="/exercises/target/:target"
          element={<TargetDetails />}
        />
        <Route
          exact
          path="/exercises/equipment/:equipment"
          element={<EquipmentDetails />}
        />
        <Route
          exact
          path="/exercises/exercise/:exercise_id"
          element={<ExerciseDetails />}
        />
      </Routes>
    </Router>
  );
}

export default App;
