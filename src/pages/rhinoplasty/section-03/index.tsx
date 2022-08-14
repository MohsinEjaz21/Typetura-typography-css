
const data = {
  text1: 'What to Do After the Rhinoplasty?',
  text2: 'Clineca will provide you with all the support and guidance you need.',
  text3: <> Rhinoplasty can address both aesthetical and medical concerns, simultaneously.
    <div className="line-break" />If your nose has a birth defect or it was injured, its shape can be corrected through surgery.
    <div className="line-break" />But you don’t have to have a serious structural problem to choose having a rhinoplasty.
    <div className="line-break" />You may have a hook nose, your nose may be too large or too small in proportion to your face, your nose tip may be too wide, or maybe there is another feature of your nose that you don’t really like.
    <div className="line-break" />Experienced surgeons can achieve amazing results which will both satisfy your expectations and look totally natural.
    <div className="line-break" />If you are experiencing breathing problems related to a crooked or bent septum, these can be treated, too.
    <div className="line-break" />Anyone older than 18 years old with good health can be a candidate. In special cases, ones younger than 18 can also be considered.
    <div className="line-break" />To be informed about your specific case in detail, you should have a consultation with a plastic surgeon.
  </>,
  image: "assets/images/sec03/img_2.png",
}

export function Section03(props) {
  return (
    <section className="section-03">
      <div className="block-01">
        <div className="text1">{data.text1}</div>
        <div className="text2">{data.text2}</div>
        <div className="text3">{data.text3}</div>
        <button className="btn">Learn More</button>
      </div>
      <div className="block-02">
        <img className="image" src={data.image} />
      </div>
    </section>
  );
}

