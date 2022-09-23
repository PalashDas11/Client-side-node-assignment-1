import './App.css';
import Users from './component/Users';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/" element={<Users></Users>}></Route>
      </Routes>
    </div>
  );
}

export default App;
