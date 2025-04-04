import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/index.scss';
import './app/index'
function Tuto() {

  return (
    <div>
      <section>
        <div className="section section--medium--margin">
          <div className="hero__content">
            <h1 className="hero__title" data-animation="text-reveal">
              I'm a freelance frontend developper and brand and logo designer currently based in Paris.

              {/* A digital
              <span> design</span> and <span>technology studio</span> located
              in <span>Oslo</span>. We build <span>brands</span>, create
              <span> digital experiences</span>, and shape the
              <span>stories of tomorrow</span>. */}
            </h1>
            <a href="/" className="button button--dark" data-animation="button">
              <span>
                <span>See our work</span>
              </span>
              <svg width="8" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.157 1.172a.5.5 0 0 0-.5-.5h-4.5a.5.5 0 0 0 0 1h4v4a.5.5 0 0 0 1 0v-4.5Zm-5.803 6.01L7.01 1.525 6.303.818.646 6.475l.708.707Z"
                  fill="#fff" />
              </svg>
            </a>
          </div>
        </div>
        <div className="section section--medium--margin">
          <div className="hero__image">
            <div className="hero__play">
              <svg width="92" height="92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="92" height="92" rx="46" fill="#fff" />
                <path d="m55 46.5-14.25 8.227V38.273L55 46.5Z" fill="#1F1F1F" />
              </svg>
              <p className="hero__play__text">Watch showreel</p>
            </div>
            <div data-animation="parallax-image">
              <img src="./images/hero.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section section--medium--margin">
        <div className="container">
          <div className="text-columns">
            <h2 className="col-1--span-4" data-animation="text-reveal">About us</h2>
            <p className="col-5--span-5" data-animation="text-reveal">
              Our name is the core of our company. We see tomorrow as 'a new day,'
              and an opportunity to make it a better place by working with
              companies that share our vision for a healthier future. That's why
              we create digital products that offer users a new perspective.
            </p>

            <a href="/" className="button button--dark col-10--span-3" data-animation="button">
              <span>
                <span>Our studio</span>
              </span>
              <svg width="8" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.157 1.172a.5.5 0 0 0-.5-.5h-4.5a.5.5 0 0 0 0 1h4v4a.5.5 0 0 0 1 0v-4.5Zm-5.803 6.01L7.01 1.525 6.303.818.646 6.475l.708.707Z"
                  fill="#fff" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="section section--medium--margin">
        <div className="container">
          <div className="text-columns">
            <h2 className="col-1--span-4" data-animation="text-reveal">About us</h2>
            <p className="col-5--span-5" data-animation="text-reveal">
              Our name is the core of our company. We see tomorrow as 'a new day,'
              and an opportunity to make it a better place by working with
              companies that share our vision for a healthier future. That's why
              we create digital products that offer users a new perspective.
            </p>

            <a href="/" className="button button--dark col-10--span-3" data-animation="button">
              <span>
                <span>Our studio</span>
              </span>
              <svg width="8" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.157 1.172a.5.5 0 0 0-.5-.5h-4.5a.5.5 0 0 0 0 1h4v4a.5.5 0 0 0 1 0v-4.5Zm-5.803 6.01L7.01 1.525 6.303.818.646 6.475l.708.707Z"
                  fill="#fff" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="section section--beige">
        <div className="container">
          <div className="projects">
            <div className="projects__left col-1--span-6">
              <img src="./images/project.jpg" alt="" />
            </div>
            <div className="projects__right col-7--span-6">
              <div className="projects__content">
                <h2 className="projects__heading h1" data-animation="text-reveal">
                  A modern ecommerce solution for the shoe industry.
                </h2>
                <p className="projects__text" data-animation="text-reveal">
                  Built with Shopify, we have created a headless solution for
                  companies to prepare for the future of e-commerce.
                </p>

                <a href="/" className="button button--dark" data-animation="button">
                  <span>
                    <span>Read more</span>
                  </span>
                  <svg width="8" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.157 1.172a.5.5 0 0 0-.5-.5h-4.5a.5.5 0 0 0 0 1h4v4a.5.5 0 0 0 1 0v-4.5Zm-5.803 6.01L7.01 1.525 6.303.818.646 6.475l.708.707Z"
                      fill="#fff" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--medium--margin">
        <div className="container">
          <h2 className="list__heading" data-animation="text-reveal">See our talks</h2>
          <ul className="list">
            <li className="list__item">
              <span className="col-1--span-5">A new way of thinking</span>
              <time className="col-6--span-5">October 10th, 2023</time>
              <span className="col-11--span-2">In House</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">Technology in 2024</span>
              <time className="col-6--span-5">September 3rd, 2023</time>
              <span className="col-11--span-2">Beckenstreet 21</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">The digital era — what is it?</span>
              <time className="col-6--span-5">September 4th, 2023</time>
              <span className="col-11--span-2">Beckenstreet 21</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">Building brands and products</span>
              <time className="col-6--span-5">November 21st, 2023</time>
              <span className="col-11--span-2">In House</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">Ecommerce 101</span>
              <time className="col-6--span-5">January 7th, 2024</time>
              <span className="col-11--span-2">Hillway Drive 28</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">Crafting digital experiences</span>
              <time className="col-6--span-5">January 28th, 2024</time>
              <span className="col-11--span-2">Taunton Fairway 4</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">A new way of thinking</span>
              <time className="col-6--span-5">October 10th, 2023</time>
              <span className="col-11--span-2">In House</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">Technology in 2024</span>
              <time className="col-6--span-5">September 3rd, 2023</time>
              <span className="col-11--span-2">Beckenstreet 21</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">The digital era — what is it?</span>
              <time className="col-6--span-5">September 4th, 2023</time>
              <span className="col-11--span-2">Beckenstreet 21</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">Building brands and products</span>
              <time className="col-6--span-5">November 21st, 2023</time>
              <span className="col-11--span-2">In House</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">Ecommerce 101</span>
              <time className="col-6--span-5">January 7th, 2024</time>
              <span className="col-11--span-2">Hillway Drive 28</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">Crafting digital experiences</span>
              <time className="col-6--span-5">January 28th, 2024</time>
              <span className="col-11--span-2">Taunton Fairway 4</span>
            </li>
          </ul>
          <a href="/" className="button button--dark col-10--span-3" data-animation="button">
            <span>
              <span>More talks</span>
            </span>
            <svg width="8" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.157 1.172a.5.5 0 0 0-.5-.5h-4.5a.5.5 0 0 0 0 1h4v4a.5.5 0 0 0 1 0v-4.5Zm-5.803 6.01L7.01 1.525 6.303.818.646 6.475l.708.707Z"
                fill="#fff" />
            </svg>
          </a>
        </div>
      </section>

      <section className="section section--small--padding section--dark">
        <div className="container">
          <div className="company">
            <div className="company__content">
              <h2 className="col-1--span-12" data-animation="text-reveal">Join the studio</h2>
              <p className="col-1--span-5" data-animation="text-reveal">
                How does a daily group breakfast, 30 days of vacation, a
                remote-friendly office, and our very own dog club sound to you?
                These are some of the things you can expect.
              </p>

              <a href="/" className="button button--light col-7--span-6" data-animation="button">
                <span>
                  <span>Open positions</span>
                </span>
                <svg width="8" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.157 1.172a.5.5 0 0 0-.5-.5h-4.5a.5.5 0 0 0 0 1h4v4a.5.5 0 0 0 1 0v-4.5Zm-5.803 6.01L7.01 1.525 6.303.818.646 6.475l.708.707Z"
                    fill="#fff" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <script type="module" src="../app/index.js"></script>
    </div >
  )
}

export default Tuto
