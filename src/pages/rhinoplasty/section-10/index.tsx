import useWindowSize from "@rehooks/window-size";
import { gsap } from "gsap/all";
import { debounce } from "lodash";
import { useState } from "react";

const icons = {
  prevIcon: "assets/slider/prev.svg",
  nextIcon: "assets/slider/next.svg",
  prevIconDisabled: "assets/slider/prev-disabled.svg",
  nextIconDisabled: "assets/slider/next-disabled.svg",
}

function Item({ title, description, index }) {
  return (
    <div className="item">
      <h3 className="div1 index">{index}</h3>
      <div className="div2 separator"></div>
      <div className="div3 title">{title}</div>
      <div className="div4 description">{description}</div>
    </div>
  );
}

const data = {
  items: [
    {
      index: '01',
      title: 'Knowing Each Other',
      description: 'Shortly after you fill the form, one of our agents will contact you. They will listen to you, ask you questions, and answer yours. They will inform you about the whole experience, in detail. If you want to go further, they will arrange an online consultation for you.',
    }, {
      index: '02',
      title: 'Online Consultation',
      description: 'You will have an online consultation with your surgeon through video chat. They will perform an online examination, listen to you about your wishes, and will provide you with in-depth information. They will help you to choose what the best approach to your case is.',
    },
    {
      index: '03',
      title: 'Planning',
      description: "We'll plan your whole journey, including the date of your surgery and where you'll stay at while you’re in Istanbul. We'll inform you about everything you need to know from what to have in your suitcase to what to do before your procedure.",
    },
    {
      index: '04',
      title: 'Landing',
      description: "Our VIP transportation vehicle will be ready at the airport before you land. Driver will be waiting for you. We'll drive you the hospital. At the hospital, we will perform required blood tests and the COVID test. Then, we will drive you your hotel.",
    },
    {
      index: '05',
      title: 'Examination & Surgery',
      description: 'The next morning, we will take you from your hotel and drive you the hospital. Your surgeon will examine you and inform you about the procedure. On the same day, you will have the surgery. You will stay at the hospital 1-2 day(s), depending on the procedure.',
    },
    {
      index: '06',
      title: 'Resting & Recovering',
      description: 'After your stay at the hospital, we will drive you your hotel. You will rest and recover at your hotel room during the following week. A nurse will visit you every day to inform you, to examine, and to provide medical care.',
    },
    {
      index: '07',
      title: 'Entertainment',
      description: 'We will gladly and proudly show you around our beautiful city. We will be more than happy to provide you with professional guidance in historical sightseeing. You can also learn from us where you can find anything from shopping to entertainment.',
    },
    {
      index: '08',
      title: 'Follow-Up & Leaving',
      description: 'We will drive you for your 1-week follow-up with your surgeon. They will examine you, remove your bandages if required, and inform you about what you should/shouldn’t do during your recovery period, in detail. Then, we will drive you airport.',
    },
    {
      index: '09',
      title: 'Recovery Period',
      description: 'During your recovery, we will be in touch. We will inform you, check on you, and answer your questions. You can reach us 7 days 24 hours. We will expect you to send photos periodically to follow your recovery period.',
    },

  ]
}

export function Section10(props) {

  const screenSize = useWindowSize().innerWidth;
  const [currentSlide, setCurrentSlide] = useState(0);
  let columnGapPx = 20;

  const handleNext = debounce(() => {
    if (currentSlide < data.items.length - 1) {
      setCurrentSlide(currentSlide => currentSlide + 1);
      scrollX(currentSlide, (a, b) => a + b);
    }
  }, 300);

  const handlePrev = debounce(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide => currentSlide - 1);
      scrollX(currentSlide, (a, b) => a - b);
    }
  }, 300);

  const onScrollItems = (e) => {
    // const scrollEl: any = document.querySelector(`.items`);
    const scrollEl: any = document.querySelector(`.section-10 .item:nth-child(${currentSlide + 1})`);

    console.log({
      scrollLeft: e.target.scrollLeft,
      offsetWidth: scrollEl.offsetWidth
    });
    // get current scrolled element
    // get current item from scroll position of items
    if (scrollEl) {
      const currentItem = Math.round(e.target.scrollLeft / (scrollEl.offsetWidth + columnGapPx)) + 1;
      console.log(currentItem);
      setCurrentSlide(currentItem);
    }
  }
  const scrollX = (index: number, accumulator) => {
    const currElem = document.querySelector(`.section-10 .item:nth-child(${currentSlide + 1})`);
    const scrollEl = document.querySelector(`.section-10 .items`);
    let size = currElem?.clientWidth;

    console.log({
      screenSize: screenSize,
      size: currElem?.clientWidth,
      scrollLeft: scrollEl?.scrollLeft,
      index: index

    });

    if (scrollEl && size) {
      gsap.to(scrollEl, {
        scrollLeft: accumulator(scrollEl.scrollLeft, (size + columnGapPx)),
        duration: 1,
        ease: "power4.out"
      });
    }
  }

  return (
    <section className="section-10">
      <h3 className="text1"> Step by Step Experience for International Patients</h3>
      <h2 className="text2">Clineca believes that everything should be correct, detailed and satisfying.</h2>
      <div className="items" onScroll={onScrollItems}>
        {data.items.map((item, index) => <Item key={index} {...item} />)}
      </div>
      <div className="footer-btns">
        <button className="btn btn-prev" onClick={handlePrev}>
          <img src={currentSlide > 0 ? icons.prevIcon : icons.prevIconDisabled} alt="" />
        </button>
        <button className="btn btn-next" onClick={handleNext}>
          <img src={currentSlide == data.items.length - 1 ? icons.nextIconDisabled : icons.nextIcon} alt="" />
        </button>
      </div>
    </section>
  );
}