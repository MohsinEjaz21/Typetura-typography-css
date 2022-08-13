import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Section01 } from '../../pages/rhinoplasty/section-01';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Section01 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;