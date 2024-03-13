// import './App.css';
// import Homepage from './pages/homepage';

// function App() {
//   return (
//     <div>
//  <Homepage/>
//     </div>
//   );
// }

// export default App;


import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/homepage";
import Toprated from "./pages/top-rated";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/top-rated", element: <Toprated /> },
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;