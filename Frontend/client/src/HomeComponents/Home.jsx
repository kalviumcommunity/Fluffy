import React from 'react';
import Navbar from './Navbar';
import AdoptingImage from '../images/dog.webp';
import PetFoodsImage from '../images/adopt1.webp';
import PetToysImage from '../images/adopt2.webp';
import LostAndFoundImage from '../images/food.png';

function Home() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '20px' }}>
        <div className="background" style={{ 
          backgroundImage: `url(${AdoptingImage})`, 
          height: '80vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: '#fff', 
          textAlign: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Introducing Pets for Adoption</h1>
            <h2 style={{ fontSize: '1.5rem' }}>Find Your Furry Companion</h2>
          </div>
        </div>
        <div className="demo-gap" style={{ marginTop: '50px' }}>
          <h3 style={{ textAlign: 'center', fontSize: '2rem' }}>Fluffy's Pet Foods</h3>
        </div>
        <div className="background" style={{ 
          backgroundImage: `url(${PetFoodsImage})`, 
          height: '80vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: '#fff', 
          textAlign: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Explore Fluffy's Pet Foods</h1>
            <h2 style={{ fontSize: '1.5rem' }}>Healthy Options for Your Furry Friend</h2>
          </div>
        </div>
        <div className="demo-gap" style={{ marginTop: '50px' }}>
          <h3 style={{ textAlign: 'center', fontSize: '2rem' }}>Fluffy's Pet Toys</h3>
        </div>
        <div className="background" style={{ 
          backgroundImage: `url(${PetToysImage})`, 
          height: '80vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: '#fff', 
          textAlign: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Discover Fluffy's Pet Toys</h1>
            <h2 style={{ fontSize: '1.5rem' }}>Keep Your Pet Entertained and Happy</h2>
          </div>
        </div>
        <div className="demo-gap" style={{ marginTop: '50px' }}>
          <h3 style={{ textAlign: 'center', fontSize: '2rem' }}>Lost and Found</h3>
        </div>
        <div className="background" style={{ 
          backgroundImage: `url(${LostAndFoundImage})`, 
          height: '80vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: '#fff', 
          textAlign: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Fluffy's Lost and Found</h1>
            <h2 style={{ fontSize: '1.5rem' }}>Reunite with Your Beloved Pet</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
