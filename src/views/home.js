import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <header className="home-container">
      <Helmet>
        <title>First Well Informed Lark</title>
        <meta property="og:title" content="First Well Informed Lark" />
      </Helmet>
      <div className="home-container01">
        <div className="home-container02">
          <div className="home-container03">
            <div className="home-container04">
              <div className="home-container05">
                <div className="home-container06">
                  <div className="home-container07">
                    <div className="home-container08">
                      <div className="home-container09">
                        <img
                          alt="image"
                          src="/playground_assets/delivery-shipping-logo-vector-260nw-571479214-200w.webp"
                          className="home-image"
                        />
                        <h1 className="home-text">fast shipping</h1>
                        <span className="home-text01">
                          <span>
                            We make shipping to your local FFL fast and Easy
                          </span>
                          <br></br>
                          <br></br>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-container10">
              <img
                alt="image"
                src="/playground_assets/images-200w.png"
                className="home-image1"
              />
              <h1 className="home-text05">BEST PRICES</h1>
              <span className="home-text06">
                We strive to have the most unbeatable prices than any other
                store
              </span>
            </div>
          </div>
          <div className="home-container11">
            <img
              alt="image"
              src="/playground_assets/download%20%5B3%5D-200w.jpg"
              className="home-image2"
            />
            <h1 className="home-text07">SAFE SHOPPING</h1>
            <span className="home-text08">
              <span>We make shipping to your local FFL fast and Easy</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Home
