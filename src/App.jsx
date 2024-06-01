import './App.css';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './shared/Layout';
import Dashboard from './components/Dashboard';
import Products from './components/Products.jsx'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='products' element={<Products />} />
          </Route>
          <Route path="/logout" element={<div>this is login page</div>} />
        </Routes>
      </BrowserRouter>
    
  );
};


export default App;
