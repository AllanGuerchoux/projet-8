
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Acceuil from './Acceuil';
import Apropos from './Apropos';
import Contact from './Contact';
import Projets from './Projets';
import '../styles/App.css';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Acceuil />} />
                <Route path="/A-propos" element={<Apropos />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Projets" element={<Projets />} />
            </Routes>
        </Router>
  );
}

export default App;
