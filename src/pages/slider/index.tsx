import { gsap } from "gsap";
import { useEffect, useState } from "react";



const icons = {
  prevIcon: "assets/slider/prev.svg",
  nextIcon: "assets/slider/next.svg",
  prevIconDisabled: "assets/slider/prev-disabled.svg",
  nextIconDisabled: "assets/slider/next-disabled.svg",
}

const data = {
  slides: [
    {
      imageUrl: 'assets/rhinoplasty/sec11/img_4.png',
      heading: 'Face Operation',
      subheading: 'Hair Transplant',
      detail: '“Oh, my God! I dont think I hava a whole new appearance. I’m like myself but with a nose where I can breathe through and with a nose I like”',
    },
    {
      imageUrl: 'assets/rhinoplasty/sec11/img_5.png',
      heading: 'John Smith',
      subheading: 'Hair Transplant',
      detail: '“it really helps me look younger and more confident. You guys are really great at making me look more charming. Thanks for everything”',
    }
  ]
}

function Slider() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slide, setSlide] = useState(data.slides[currentSlide]);

  useEffect(() => {
    setSlide(data.slides[currentSlide]);
  }, [currentSlide]);

  const fadeInOutGsap = (el: any) => {
    gsap.fromTo(el, {
      opacity: 0,
      y: -50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out"
    });
  }


  const handleNext = () => {
    if (currentSlide < data.slides.length - 1) {
      fadeInOutGsap('.slider-content');
      setCurrentSlide(currentSlide => currentSlide + 1);
    }
  }

  const handlePrev = () => {
    if (currentSlide > 0) {
      fadeInOutGsap('.slider-content');
      setCurrentSlide(currentSlide => currentSlide - 1);
    }
  }

  return (
    <div className="slider01">
      <div className="slider-container">
        <div className="slider-content">
          <img className="img" src={slide.imageUrl} alt="" />
          <div className="text">
            <h1 className="heading">{slide.heading}</h1>
            <h2 className="subheading">{slide.subheading}</h2>
          </div>
          <p className="detail">{slide.detail}</p>
        </div>
      </div>
      <div className="footer-btns">
        <button className="btn btn-prev" onClick={handlePrev}>
          <img src={currentSlide > 0 ? icons.prevIcon : icons.prevIconDisabled} alt="" />
        </button>
        <button className="btn btn-next" onClick={handleNext}>
          <img src={currentSlide < data.slides.length - 1 ? icons.nextIcon : icons.nextIconDisabled} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Slider