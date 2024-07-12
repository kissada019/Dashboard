import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Analytics from './pages/Analytics'
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Sidebar>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/analytics' element={<Analytics />} />
                </Routes>
            </Sidebar>
        </BrowserRouter>
    );
}

export default App;
