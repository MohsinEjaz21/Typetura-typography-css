import useWindowSize from "@rehooks/window-size";

const data = {
  image: "assets/rhinoplasty/sec12/img_1.svg",
  imageMobile: "assets/rhinoplasty/sec12/img_2.png",
  text1: 'Clineca Consultaion',
  text2: 'We’re open and welcoming  patients! Let us make an appointment for your online consultation.',
  btnText: 'Book Online Consultation'
}

export function Section12(props) {
  const isSmall = useWindowSize().innerWidth < 991;

  return (

    <div className="section-12">
      <div className="container">
        <div className="left-section">
          <div className="content">
            {isSmall && <img className="image" loading="lazy" src={data.imageMobile} />}
            {!isSmall && <img className="image" loading="lazy" src={data.image} />}
          </div>
        </div>
        <div className="right-section">
          <div className="content">
            <h1 className="text1">{data.text1}</h1>
            <h2 className="text2">{data.text2}</h2>
            <div className="w-btn">{data.btnText}</div>
          </div>
        </div>
      </div>
    </div>

  );
}

