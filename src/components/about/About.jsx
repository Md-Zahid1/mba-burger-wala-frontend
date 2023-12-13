import React from 'react'
import { Link } from 'react-router-dom';
import { RiFindReplaceLine } from 'react-icons/ri';
import me from '../../assets/founder.webp';

const About = () => {
  return (
    <section className='about'>
      <main>
        <h1>About Us</h1>
        <article>
          <h4>MBA Burger Wala</h4>
          <p>We are MBA Burger wala. The Place for Most Tasty Burgers On The Entire Earth.</p>
          <p>Explore the various type of Food And Burgers. Click below to see the Menu</p>
          <Link><RiFindReplaceLine /></Link>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt='founder' />
              <h3>Abhishek Singh</h3>
            </div>
            <p>I am Abhishek Singh, the Founder of MBA Burger wala. affilited to Good Tast...</p>
          </article>
        </div>
      </main>
    </section>
  )
}

export default About
