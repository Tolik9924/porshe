import React, { useState } from 'react';

// components
import Header from './components/common/Header';
import MainRoutes from './routes/MainRoutes';
import Footer from './components/common/Footer';

// data
import { ukrainian, english } from './data/languages';

// styles
import './App.css';

const App = () => {

  const [language, setLanguage] = useState(english);

  console.log(language);

  return (
    <div>
      <div className="wrap">
        <Header ukrainian={language.header} />
        <MainRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
