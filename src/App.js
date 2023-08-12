import { Routes, Route } from 'react-router-dom'
import Dashboard from './container/Dashboard';
import Departments from './container/Departments';
import Products from './container/Products';
import DepartmentPage from './container/DepartmentPage';
import SingleProduct from './container/SingleProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Dashboard /> } />
        <Route path='/departments' element= {<Departments /> } />
        <Route path='/:departmentName' element= {<DepartmentPage />} />
        <Route path='/products' element= {<Products /> } />
        <Route path='/products/:productId' element= {<SingleProduct /> } />
      </Routes>
    </div>
  );
}

export default App;
