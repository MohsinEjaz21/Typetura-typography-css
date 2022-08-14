import useWindowSize from '@rehooks/window-size';

const data = {
  image: "assets/images/sec01/img_2.png",
  imageMobile: "assets/images/sec01/img_1.png",
  title: 'Looking Beautiful isn’t Luck, It’s a Decision',
  subTitle: 'Rhinoplasty (nose)',
  description: <>
    A rhinoplasty procedure reshapes, corrects or <span className="color-primary">reconstructs the nose</span> to achieve more aesthetically pleasing results and to
    <span className="color-primary"> enhance ones' physical appearance.</span> <br /> <span className="line-break" /> Not the right nose? <span className="color-primary">Lets fix it.</span>
  </>,
  btnText: 'Book Online Consultation',

}

export function Section01(props) {
  const isSmall = useWindowSize().innerWidth < 1144;

  return (
    <section className="section-01">
      <div className="block1">
        <h2 className="h-small color-primary">{data.title}</h2>
        <h1 className="h-large color-white">{data.subTitle}</h1>
        <p className="paragraph-light">{data.description}</p>
        <button className="btn btn-secondary-2">{data.btnText}</button>
      </div>
      <div className="block2">
        {isSmall && <img className="image" loading="lazy" src={data.imageMobile} />}
        {!isSmall && <img className="image" loading="lazy" src={data.image} />}
      </div>
    </section>
  );
}

