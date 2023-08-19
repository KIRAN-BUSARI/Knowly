import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/Home";
import CommunityPage from "./components/CommunityPage";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/CommunityPage" element={<CommunityPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
