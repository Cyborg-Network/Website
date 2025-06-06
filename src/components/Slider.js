import React from "react";
import Image from 'next/image';
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

import ricFlair from '../../public/images/testimony/ric-flair.jpg'
import johnDoe from '../../public/images/testimony/john-doe.jpg'
import emmaWatson from '../../public/images/testimony/emma-watson.jpg'
import fb from '../../public/images/partners/fb.svg'
import mw from '../../public/images/partners/mw.svg'
import dy from '../../public/images/partners/dy.svg'
import cd from '../../public/images/partners/cd.svg'
import yh from '../../public/images/partners/yh.svg'
import nd from '../../public/images/partners/nd.svg'
import aws from '../../public/images/backers/aws.png'
import ms from '../../public/images/backers/ms.png'
import nip from '../../public/images/partners/nip.png'
import cess from '../../public/images/partners/cess.png'
import ezkl from '../../public/images/partners/ezkl.png'
import difc from '../../public/images/partners/difc.png'
import dac from '../../public/images/partners/dac.png'
import pol from '../../public/images/partners/pol.png'
import wfgp from '../../public/images/partners/wfgp.svg'
import pban from '../../public/images/partners/pba.png'


const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

function Tesimonial() {
  return (
    <OwlCarousel className='owl-theme' loop items={1} dots smartSpeed={1500}>
        <div className="ts-content">
            <div className="ts-img">
                <Image src={ricFlair} alt="testimony profile"/>
            </div>
            <div className="ts-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className="ts-detail">
                <div className="ts-mob-img">
                <Image src={ricFlair} alt="testimony profile"/>
                </div>  
                <div className="ts-info">
                <h5>Ric Flair</h5>
                <span>Solution Architect</span>
                </div>
                </div>
            </div>
        </div>
        <div className="ts-content">
            <div className="ts-img">
                <Image src={johnDoe} alt="testimony profile"/>
            </div>
            <div className="ts-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <h5>John Doe</h5>
                <span>Project Manager</span>
            </div>
        </div>
        <div className="ts-content">
            <div className="ts-img">
                <Image src={emmaWatson} alt="testimony profile"/>
            </div>
            <div className="ts-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <h5>Emma Watson</h5>
                <span>CTO</span>
            </div>
        </div>
    </OwlCarousel>
  );
}

const Responsive = {
  0: {
    items: 2,
    dots: false
  },
  480: {
    items: 3,
    dots: false
  },
  640: {
    items: 4,
    dots: false
  },
  768: {
    items: 5,
    dots: false
  },
  1024: {
    items: 6,
    dots: false
  }
}

function Partner() {
    return (
      <OwlCarousel responsive={Responsive} className='owl-theme' loop autoplay items={6} smartSpeed={3000} autoplayTimeout={3000}>
        <div className="ps-content">
          <Image src={fb} alt="Forbes"/>
        </div>
        <div className="ps-content">
          <Image src={mw} alt="Market Watch"/>
        </div>
        <div className="ps-content">
          <Image src={dy} alt="Disney"/>
        </div>
        <div className="ps-content">
          <Image src={yh} alt="Yahoo"/>
        </div>
        <div className="ps-content">
          <Image src={cd} alt="Coind Desk"/>
        </div>
        <div className="ps-content">
          <Image src={nd} alt="Nasdaq"/>
        </div>
      </OwlCarousel>
    );
  }

  const ResponsiveOne = {
    0: {
      items: 2,
      dots: false
    },
    480: {
      items: 3,
      dots: false
    },
    640: {
      items: 4,
      dots: false
    },
    768: {
      items: 5,
      dots: false
    },
    1024: {
      items: 6,
      dots: false
    }
  }
  
  function Backer() {
      return (
        <OwlCarousel responsive={ResponsiveOne} className='owl-theme' autoplay items={6} smartSpeed={3000} autoplayTimeout={3000}>
          <div className="ps-content">
            <a href="https://aws.amazon.com/what-is-cloud-computing"><Image src={aws} alt="AWS"/></a>
          </div>
          <div className="ps-content">
            <Image src={ms} alt="Microsoft"/>
          </div>
        </OwlCarousel>
      );
    }

  function Programs() {
      return (
        <OwlCarousel responsive={ResponsiveOne} className='owl-theme' autoplay items={6} smartSpeed={3000} autoplayTimeout={3000} loop>
          <div className="ps-content">
          <a href=""><Image src={nip} alt="nip"/></a>
          </div>
          <div className="ps-content">
          <a href=""><Image src={cess} alt="cess"/></a>
          </div>
          <div className="ps-content">
          <a href=""><Image src={ezkl} alt="ezkl"/></a>
          </div>
          <div className="ps-content">
          <a href=""><Image src={difc} alt="difc"/></a>
          </div>
          <div className="ps-content">
          <a href=""><Image src={dac} alt="dac"/></a>
          </div>
          <div className="ps-content">
          <a href=""><Image src={pol} alt="pol"/></a>
          </div>
          <div className="ps-content">
          <a href=""><Image src={wfgp} alt="wfgp"/></a>
          </div>
          <div className="ps-content">
          <a href=""><Image src={pban} alt="pban"/></a>
          </div>
        </OwlCarousel>
      );
    }

  export {Tesimonial, Partner, Backer, Programs};
