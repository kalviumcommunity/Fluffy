import React from 'react';
import Navbar from './Navbar';
import Dog from '../images/dog.webp';

function Home() {
  return (
    <>
      <Navbar />
      <div className='para1' style={{ padding: '0 300px', backgroundColor: '', color: 'black' }}>
      <div>
          <img src={Dog} alt="" style={{ objectFit: 'cover', height: '50vh', width: '55vw', borderRadius: '20px' }} />
        </div>
        <div>
          <p id='head1' style={{ fontSize: '3rem' }}>What is a pet?🐕‍🦺</p>
          <p style={{ padding: '15px', lineHeight: '1.6' }}>Imagine a professional cuddler who also happens to be your personal shedding machine. A living alarm clock set for the ungodly hour of 5:00 AM. Basically, a mini dictator who demands chin scratches and belly rubs whenever they please.  That's a pet in a nutshell!</p>
        </div>
        <hr />
        <div>
          <p id='head1' style={{ fontSize: '3rem' }}>Benefits of having Pets</p>
          <div>
            <h2 style={{ padding: '15px' }}>Pets are friends</h2>
            <p style={{ padding: '15px', lineHeight: '1.6' }}>Pets are friendly animals that need love and affection from humans. They can provide companionship, bring joy to our lives, and give us affection.</p>
          </div>
          <hr />
          <div>
            <h2 style={{ padding: '15px' }}>Pets can help improve mental health</h2>
            <p style={{ padding: '15px', lineHeight: '1.6' }}>Owning a pet can improve your physical, mental, and emotional health. Spending time with your pet can trigger an increased level of oxytocin, also known as the "love hormone". It can also help children with their emotional and social skills.</p>
          </div>
          <hr />
          <div>
            <h2 style={{ padding: '15px' }}>Pets can help reduce stress</h2>
            <p style={{ padding: '15px', lineHeight: '1.6' }}>Pets can help decrease stress, improve heart health, and even help children with their emotional and social skills. Petting your favorite cat or dog for around 15 minutes releases hormones like oxytocin, prolactin, and serotonin. It also lowers your cortisol, which is the body's natural stress hormone.</p>
          </div>
          <hr />
          <div>
            <h2 style={{ padding: '15px' }}>Pets can help increase opportunities to exercise</h2>
            <p style={{ padding: '15px', lineHeight: '1.6' }}>Regular walking or playing with pets can decrease blood pressure, cholesterol levels, and triglyceride levels.</p>
          </div>
          <hr />
          <div>
            <h3 style={{ padding: '15px' }}>Read more :</h3>
            <a href="https://www.transitionslifecare.org/2020/05/27/the-importance-of-pets-in-our-lives/#:~:text=If%20you%20spend%20around%2015,the%20body's%20natural%20stress%20hormone." style={{ color: '#007bff', textDecoration: 'none', lineHeight: '1.6' }}>The Importance of Pets in Our Lives</a><br />
            <a href="https://newsinhealth.nih.gov/2018/02/power-pets#:~:text=Nothing%20compares%20to%20the%20joy,their%20emotional%20and%20social%20skills." style={{ color: '#007bff', textDecoration: 'none', lineHeight: '1.6' }}>The Power of Pets</a><br />
            <a href="https://www.businessinsider.com/reasons-why-having-a-pet-is-good-for-you?IR=T#:~:text=Owning%20a%20pet%20can%20help%20reduce%20stress,the%20%22love%20hormone.%22%20This%20is%20responsible%20for" style={{ color: '#007bff', textDecoration: 'none', lineHeight: '1.6' }}>Reasons why having a pet is good for you!.</a><br />
            <a href="https://www.washingtonpost.com/news/animalia/wp/2017/11/03/pets-arent-wonder-drugs-heres-why-we-love-them-anyway/" style={{ color: '#007bff', textDecoration: 'none', lineHeight: '1.6' }}>Why do we love Our Pets?</a><br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
