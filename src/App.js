// call json server : npx json-server --watch data/db.json --port 8000

import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";

import NotFound from "./NotFound";
import RecipeDetails from "./RecipeDetails";
import Edit from "./Edit";

// All Pages for the routes (RecipeList & SearchBar are the components for Home Page. They are not Routes)
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
