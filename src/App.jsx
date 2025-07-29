
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Success from './pages/Success';
function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/success" element={<Success />} />

      </Routes>

    </>
  );
}

export default App;
