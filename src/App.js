import logo from './assets/logo.jpg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// Import pages
import Home from './pages/Landing';
import Application from './pages/Application';
import Summary from './pages/Summary';

function App() {
    return (
        <div className="App">
            <div className="navigation">
                <div className="left">
                    <div className="logo">
                        <img src={logo} className="logo" alt="logo" />
                    </div>
                    <div className="search">
                        <input placeholder="Seach products" />
                    </div>
                    <div className="links">
                        <span>Home</span>
                        <span>Quotes</span>
                        <span>Orders</span>
                        <span>Support</span>
                        <span>Account</span>
                    </div>
                </div>
                <div className="right">
                    <div className="links">
                        <span to="/">Cart</span> <span to="/">Logout</span>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/application" element={<Application />} />
                <Route path="/summary" element={<Summary />} />
            </Routes>
        </div>
    );
}

export default App;
