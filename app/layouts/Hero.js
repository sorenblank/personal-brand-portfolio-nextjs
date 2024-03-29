"use client"

import { useEffect, useRef } from 'react';
import Img from "@/app/components/Image";
import "@/app/globals.css";
import { IoCallOutline, IoCloudDownloadOutline, IoDownloadOutline, IoMailOpenOutline, IoMailOpenSharp, IoPhoneLandscapeOutline, IoTextOutline } from 'react-icons/io5';

export default function Hero() {

  const tiltRef = useRef(null);

  useEffect(() => {
    const tiltElements = tiltRef.current.querySelectorAll("[data-tilt]");

    const initTilt = function (event) {
      const centerX = this.offsetWidth / 2;
      const centerY = this.offsetHeight / 2;

      const tiltPosY = ((event.offsetX - centerX) / centerX) * 10;
      const tiltPosX = ((event.offsetY - centerY) / centerY) * 10;

      this.style.transform = `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${tiltPosY - (tiltPosY * 2)}deg)`;
    }

    tiltElements.forEach(el => {
      el.addEventListener("mousemove", initTilt);
      el.addEventListener("mouseout", function () {
        this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
      });
    });

    return () => {
      tiltElements.forEach(el => {
        el.removeEventListener("mousemove", initTilt);
        el.removeEventListener("mouseout", function () {
          this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });
      });
    }
  }, []);

  return (
    <div className="hero text-center" id="home" ref={tiltRef}>
      <div className="container">

        <div className="banner-outline has-after">

          <div className="hero-banner img-holder has-after" style={{"--width":"500px", "--height":"680px"}} data-tilt>
            <Img src="hero-banner.jpg" width="500" height="680" alt="Soren D." className="img-cover" />
          </div>

          <span className="span title">Soren D. Blank</span>

        </div>

        <div className="hero-content">

          <h1 className="h1 title">Grow Your Business With Me & My Team.</h1>

          <div className="wrapper">
            <a href="#contact" className="btn btn:hover">
              <span className="span">Contact Us</span>

              <IoMailOpenOutline className="ion-icon" aria-hidden="true"/>
            </a>

            <p className="hero-text">
              We are your one-stop solution for all your digital needs on the Internet
            </p>
          </div>

        </div>

        <Img src="hero-shape-1.png" width="559" height="232" alt="shape" className="shape shape-1" />

        <Img src="hero-shape-2.png" width="1358" height="497" alt="shape" className="shape shape-2" />

      </div>
    </div>
  )
}