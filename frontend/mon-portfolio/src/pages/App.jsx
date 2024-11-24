
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Acceuil from './Acceuil';
import Projets from './Projets';
import '../styles/App.css';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Acceuil />} />
                <Route path="/Projets/:id" element={<Projets />} />
            </Routes>
        </Router>
  );
}

export default App;
