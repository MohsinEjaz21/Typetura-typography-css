import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rhinoplasty from '../../pages/rhinoplasty';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rhinoplasty />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;