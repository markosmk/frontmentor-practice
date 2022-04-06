import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Detail from './Detail';
import Layout from './components/Layout';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path=":countryCode" element={<Detail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
