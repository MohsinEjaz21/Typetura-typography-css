import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Section1 } from '../../pages/typetura/section-1';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Section1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;