import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './routes/home';
import Page from './routes/page';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Page />} />
      </Routes>
    </BrowserRouter>

  )
    
}



export default App;
