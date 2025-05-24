import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import FundPivot from './pages/FundPivot';
import Auditly from './pages/Auditly';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fundpivot" element={<FundPivot />} />
          <Route path="/auditly" element={<Auditly />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;