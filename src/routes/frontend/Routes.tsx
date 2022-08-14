import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rhinoplasty from '../../pages/rhinoplasty';
import { Section03 } from '../../pages/rhinoplasty/section-03';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Section03 />} />
        <Route path="/rhino" element={<Rhinoplasty />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;