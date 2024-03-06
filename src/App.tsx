import './App.css';
import MainPageTM from './components/MainPageTM';
import { Routes, Route, useLocation } from "react-router-dom";
import PortfolioTM from './components/PortfolioTM';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SkeletonTmAll from './components/SkeletonTmAll';

function App() {

const [arrTms, setArrTm] = useState([]);
const [loading, setLoading] = useState<boolean>(true);
const location = useLocation();
const [locationTM, setLocationTM] = useState<boolean>(true);

  useEffect(() => {
    const pathArr = location.pathname.split("/");
    const tmLink = pathArr[pathArr.length-1];
      if (tmLink !== 'tm_all') {
        setLocationTM(false);
      }
    axios.get('custom_web_template.html?object_code=get_info_tms'
)
  .then ((result) => {
    setArrTm (result.data.arrTms);
    setLoading(false);
  })
  .catch(console.log)
  }, []);



  
  return (
    <div className="App">
      {loading && locationTM &&
        <SkeletonTmAll />
      }
      
      <Routes>

      
        <Route path="/_wt/tm_all" element={<MainPageTM loading={loading} setLoading={setLoading} arrTms = {arrTms} />} />
      
        <Route path="/_wt/tm_all/:tmId" element={<PortfolioTM />} />

      </Routes>
    </div>
  );
}

export default App;
