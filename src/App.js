// import logo from './logo.svg';
// import './App.css';
// import Home from "../src/pages/Home";
// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import { useEffect, useState } from 'react';
// import LoginForm from './components/LoginForm';
// import Private from './components/PrivateRoute ';
// import Public from "./components/PublicRoute";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";

import { TabForm } from "./components/TabForm";

// function App() {

//   const [count, setCount] = useState(0);
//   const [num, setNum] = useState(0);
//   const [sum, setSum] = useState(0);

//   useEffect(() => {
//     let total = 0;
//     for (let index = 0; index <= num; index++) {
//       total += index;
//     }
//     setSum(total);
//   }, [num]);

//   return (
//     <div className="App">
//       {/* <Home/> */}
//       {/* <BrowserRouter>
//         <Routes>
//           <Route path="/home" element={<Home/>}/>
//         </Routes>
//       </BrowserRouter> */}
//       <p>Home</p>
//       {/* <div>
//         <input type='number' value={num} onChange={(e) => {
//           setNum(e.target.value)
//         }}></input>
//       <h4>Sum - {sum}</h4>
//       <button onClick={() => {
//         setCount(count+1);
//       }}>{count}</button>
//       </div> */}
//       <LoginForm/>
//     </div>
//   );
// }



// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route path="/login" element={
//           <Public>
//             <Login />
//           </Public>
//         } />

//         <Route path="/dashboard" element={
//           <Private>
//             <Dashboard />
//           </Private>
//         } />
//       </Routes>
//     </BrowserRouter>
//   );
// }


const App = () => {
  return (
    <>
      <TabForm/>
    </>
  )
}
export default App;