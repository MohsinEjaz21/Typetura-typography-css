import { default as useWindowSize } from "@rehooks/window-size";
import { gsap } from "gsap/all";
import { useState } from "react";


const icons = {
  prevIcon: "assets/slider/prev.svg",
  nextIcon: "assets/slider/next.svg",
  prevIconDisabled: "assets/slider/prev-disabled.svg",
  nextIconDisabled: "assets/slider/next-disabled.svg",
}

const data = {
  title: 'Why Clineca ?',
  subTitle: 'From beginning to end, we inform you, guide you, serve you, and help you.',
  items: [
    {
      image: "assets/rhinoplasty/sec09/img_1.svg",
      title: "Fully Equipped Hospitals",
      description: "Surgeries are performed in prestigious fully equipped hospitals in which doctors from all specialties are present.",
      btnText: "More Info"
    },
    {
      image: "assets/rhinoplasty/sec09/img_2.svg",
      title: "Free Consultation",
      description: "We provide free online consultation with our surgeons through video chat.",
      btnText: "More Info"
    },
    {
      image: "assets/rhinoplasty/sec09/img_3.svg",
      title: "Ensured Performance",
      description: "Our surgeons perform a limited number of surgeries each week to ensure the best results.",
      btnText: ""
    },
    {
      image: "assets/rhinoplasty/sec09/img_4.svg",
      title: "7/24 Support",
      description: "You can contact our agents 7 days 24 hours for your questions or support.",
      btnText: ""
    },
    {
      image: "assets/rhinoplasty/sec09/img_5.svg",
      title: "5-Star Hotels",
      description: "We provide special discounts in luxurious hotels near the hospital. Considering your comfort, this is very important to us.",
      btnText: "More Info"
    },
    {
      image: "assets/rhinoplasty/sec09/img_6.svg",
      title: "VIP Transportation",
      description: "We provide, via VIP vehicles, airport transfer and transportation between your hotel and the hospital before and after the surgery.",
      btnText: "More Info"
    },
    {
      image: "assets/rhinoplasty/sec09/img_7.svg",
      title: "Visits by Nurses",
      description: "A nurse will visit you every day during your hotel resting to examine you and provide medical care.",
      btnText: ""
    },
    {
      image: "assets/rhinoplasty/sec09/img_8.svg",
      title: "No Hidden Costs",
      description: "The price includes fees of the surgeon and the anesthesiologist, operating room expenses, anesthesia, hospitalization, standard tests, medications and medical visits by a nurse.",
      btnText: ""
    },
    {
      image: "assets/rhinoplasty/sec09/img_8.svg",
      title: "All Inclusive",
      description: "The price includes hotel accommodation (including breakfast), airport transfer, transportation between hotel and hospital before and after the surgery.",
      btnText: "More Info"
    },
    {
      image: "assets/rhinoplasty/sec09/img_9.svg",
      title: "All Inclusive",
      description: "Interpreter service, BBL pillow, neck pillow (rhinoplasty), eye mask (rhinoplasty), voltage converter, and others that will enhance your comfort and satisfaction.",
      btnText: ""
    },
    {
      image: "assets/rhinoplasty/sec09/img_10.svg",
      title: "Optional Services & Products",
      description: "Interpreter service, BBL pillow, neck pillow (rhinoplasty), eye mask (rhinoplasty), voltage converter, and others that will enhance your comfort and satisfaction.",
      btnText: ""
    },
    {
      image: "assets/rhinoplasty/sec09/img_11.svg",
      title: "Why Turkey?",
      description: "Turkey is a leading player in medical tourism, now. And İstanbul is the plastic surgery capital of Turkey. İstanbul is also an extremely beautiful touristic city.",
      btnText: "More Info"
    }
  ]
}


function Item({ title, description, btnText, image, className = "" }) {
  return (
    <div className={`item ${className}`}>
      <img className="image" src={image} alt="" />
      <h1 className="text1">{title}</h1>
      <p className="text2">{description}</p>
      {btnText && <button className="btn">{btnText}</button>}
    </div>
  );
}



export function Section09(props) {

  const screenSize = useWindowSize().innerWidth;
  const isMdScreen = screenSize < 991;
  const [currentSlide, setCurrentSlide] = useState(0);


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
    if (currentSlide < data.items.length - 1) {
      setCurrentSlide(currentSlide => currentSlide + 1);
      scrollXToElement(currentSlide);
    }
  }

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide => currentSlide - 1);
      scrollXToElement(currentSlide);

    }
  }

  const scrollXToElement = (index: number) => {
    const foreachEl = document.querySelector(`.item:nth-child(${index + 1})`);
    const scrollEl = document.querySelector(`.items`);
    let size = foreachEl?.clientWidth;
    let columnGapPx = 16;
    console.log({ screenSize: screenSize, foreachElSize: foreachEl?.clientWidth, scrollLeft: scrollEl?.scrollLeft });

    if (scrollEl && size) {
      gsap.to(scrollEl, {
        scrollLeft: scrollEl.scrollLeft + size + columnGapPx,
        duration: 1,
        ease: "power4.out"
      });
    }
  }



  return (
    <section className="section-09">
      <div className="block-01">
        <h2 className="text1">{data.title}</h2>
        <h1 className="text2">{data.subTitle}</h1>
      </div>
      <div className="block-02">
        <div className="items">
          {data?.items.map((item, index) => <Item key={index} {...item} />)}
          {/* {isMdScreen && data?.items?.[currentSlide - 1] && <Item className="prevSlide" {...data.items[currentSlide - 1]} />}
          {isMdScreen && data?.items?.[currentSlide] && <Item className="currentSlide" {...data.items[currentSlide]} />}
          {isMdScreen && data?.items?.[currentSlide + 1] && <Item className="nextSlide" {...data.items[currentSlide + 1]} />} */}
        </div>
      </div>
      <div className="footer-btns">
        <button className="btn btn-prev" onClick={handlePrev}>
          <img src={currentSlide > 0 ? icons.prevIcon : icons.prevIconDisabled} alt="" />
        </button>
        <button className="btn btn-next" onClick={handleNext}>
          <img src={currentSlide < data.items.length - 1 ? icons.nextIcon : icons.nextIconDisabled} alt="" />
        </button>
      </div>
    </section >
  );
}





// const scrollXToElement = (index: number) => {
//   const foreachEl = document.querySelector(`.item:nth-child(${index + 1})`);
//   const scrollEl = document.querySelector(`.items`);
//   // let size = screenSize;
//   let size = foreachEl?.clientWidth;
//   let gap = 16;
//   console.log({ screenSize: screenSize, foreachElSize: foreachEl?.clientWidth, scrollLeft: scrollEl?.scrollLeft });

//   if (scrollEl && size) {
//     // el.scrollLeft = index * el.clientWidth;
//     gsap.to(scrollEl, {
//       scrollLeft: scrollEl.scrollLeft + size + gap,
//       duration: 1,
//       ease: "power4.out"
//     });

//     // el.scrollLeft += windowSize.innerWidth;
//   }

//   // scrollLeft using gsap


// }

