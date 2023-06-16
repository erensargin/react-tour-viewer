
import './App.css';
import { useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import FloorList from './pages/FloorList';
import HotspotList from './pages/HotspotList';
import { TourProvider } from './TourContext';

function App() {

  return (
<>
<TourProvider>
<Routes>
  <Route exact path="/" element={<Home/>} />
  <Route exact path="/:tourId" element={<FloorList />} />
  <Route exact path="/:tourId/:floorId" element={<HotspotList />} />
  {/* <Route exact path="/:tourId/:floorId/:hotspotId" element={PhotoList} />
  <Route exact path="/:tourId/:floorId/:hotspotId/:photoId" element={PhotoViewer} /> */}

</Routes>
</TourProvider>
</>
  );
}

export default App;
