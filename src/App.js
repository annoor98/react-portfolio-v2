import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import pic1 from './assets/leaves.jpg';
import pic2 from './assets/keyboard.jpg';
import pic3 from './assets/office.jpg';

function App() {
  return (
    <div className="App">
      <div className="container min-vh-100" style={{}}>
        <div className="row card-deck h-100" style={{}}>
          <Header />
          <Card title='About' image={pic1}/>
          <Card title='Skills' image={pic2}/>
          <Card title='Experience' image={pic3}/>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
