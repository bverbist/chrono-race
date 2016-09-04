import React from 'react';
import Header from './HeaderComponent';
import Setup from '../setup/SetupComponent';
import Race from '../race/RaceComponent';
import Footer from './FooterComponent';

const App = () => (
    <div>
        <Header />
        <Setup />
        <Race />
        <Footer />
    </div>
);

export default App;
