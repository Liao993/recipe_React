// call json server : npx json-server --watch src/data/db.json --port 8000
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import NotFound from "./pages/NotFound";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import Edit from "./pages/Edit/Edit";

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
