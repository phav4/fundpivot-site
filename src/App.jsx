import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import FundPivot from './pages/FundPivot';
import Auditly from './pages/Auditly';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/fundpivot" element={<FundPivot />} />
      <Route path="/auditly" element={<Auditly />} />
    </Routes>
  );
}