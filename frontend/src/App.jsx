import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Hotels from './pages/Hotels';

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hotels/:city" element={<Hotels />} />
            </Routes>
        </Router>
    );
}
