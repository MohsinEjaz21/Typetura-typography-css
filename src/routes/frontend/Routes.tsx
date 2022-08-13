import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rhinoplasty from '../../pages/rhinoplasty';
import { Section01 } from '../../pages/rhinoplasty/section-01';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Section01 />} />
        <Route path="/rhino" element={<Rhinoplasty />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;