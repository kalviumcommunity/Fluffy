import React from 'react';
import Navbar from './Navbar'
import Slider from './Slider';

function Home() {
  return (
    <>
    <Navbar/>
    {/* <Slider/> */}
    <div className='para1'>
      <div>
        <p id='head1'>What is a pet?🐕‍🦺</p>
        {/* <hr /> */}
        <p>Imagine a professional cuddler who also happens to be your personal shedding machine. A living alarm clock set for the ungodly hour of 5:00 AM. Basically, a mini dictator who demands chin scratches and belly rubs whenever they please.  That's a pet in a nutshell!</p>
      </div>

      <div>
        <p id='head1'>Benefits of having Pets</p>
        {/* <hr /> */}
        <div>
          <h2>Pets are friends</h2>
          <p>Pets are friendly animals that need love and affection from humans. They can provide companionship, bring joy to our lives, and give us affection.</p>
        </div>
        <hr />
        <div>
          <h2>Pets can help improve mental health</h2>
          <p>Owning a pet can improve your physical, mental, and emotional health. Spending time with your pet can trigger an increased level of oxytocin, also known as the "love hormone". It can also help children with their emotional and social skills.</p>
        </div>
        <hr />
        <div>
          <h2>Pets can help reduce stress</h2>
          <p>Pets can help decrease stress, improve heart health, and even help children with their emotional and social skills. Petting your favorite cat or dog for around 15 minutes releases hormones like oxytocin, prolactin, and serotonin. It also lowers your cortisol, which is the body's natural stress hormone.</p>
        </div>
        <hr />
        <div>
          <h2>Pets can help increase opportunities to exercise</h2>
          <p>Regular walking or playing with pets can decrease blood pressure, cholesterol levels, and triglyceride levels.</p>
        </div>
        <hr />
        <div>
          <h2>Read more :</h2>
          <a href="https://www.transitionslifecare.org/2020/05/27/the-importance-of-pets-in-our-lives/#:~:text=If%20you%20spend%20around%2015,the%20body's%20natural%20stress%20hormone.">The Importance of Pets in Our Lives</a><br />
          <a href="https://newsinhealth.nih.gov/2018/02/power-pets#:~:text=Nothing%20compares%20to%20the%20joy,their%20emotional%20and%20social%20skills.">The Power of Pets</a><br />
          <a href="https://www.businessinsider.com/reasons-why-having-a-pet-is-good-for-you?IR=T#:~:text=Owning%20a%20pet%20can%20help%20reduce%20stress,the%20%22love%20hormone.%22%20This%20is%20responsible%20for">Reasons why having a pet is good for you!.</a><br />
          <a href="https://www.washingtonpost.com/news/animalia/wp/2017/11/03/pets-arent-wonder-drugs-heres-why-we-love-them-anyway/">Why do we love Our Pets?</a><br />      
        </div>
       
      </div> 
    </div>
    </>
  );
}

export default Home;
