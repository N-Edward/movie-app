
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'  Component={Home} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
