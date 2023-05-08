import Users from "./pages/TweetsPage";
import Layout from './Layout';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import TweetsPage from './pages/TweetsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
            <Route path="/homepage" element={<HomePage/>} />
            <Route path="/tweets" element={<TweetsPage/>}/>
      </Route>
    </Routes>
  );
};
