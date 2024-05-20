import useWindowSize from '@rehooks/window-size';

const data = {
  text1: 'What to Do After the Rhinoplasty?',
  text2: 'Clineca will provide you with all the support and guidance you need.',
  text3: <> Using rhinoplasty, the size and the shape of the nose may be changed. It’s also possible to improve breathing.
    <div className="line-break" />The motivation may be to treat a structural problem caused by an injury, to correct a birth defect…
    <div className="line-break" />Perhaps you may just want to have a more aesthetical appearance.</>,
  image: "assets/rhinoplasty/sec02/img_1.png",
  imageMobile: "assets/rhinoplasty/sec02/img_2.png",

}

export function Section02(props) {
  const isSmall = useWindowSize().innerWidth < 991;

  return (
    <section className="section-02">
      <div className="block-02">
        {isSmall && <img className="image" src={data.imageMobile} />}
        {!isSmall && <img className="image" src={data.image} />}
      </div>
      <div className="block-01">
        <h1 className="text1">{data.text1}</h1>
        <h2 className="text2">{data.text2}</h2>
        <div className="text3">{data.text3}</div>
        <button className="btn">Learn More</button>
      </div>

    </section>
  );
}

