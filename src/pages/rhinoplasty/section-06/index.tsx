import useWindowSize from "@rehooks/window-size";

const data = {
  illustration: "assets/icons/icon_4.svg",
  listOfElements: [
    {
      title: 'The First Week',
      image: "assets/rhinoplasty/sec06/img_1.png",
      text: <>Like all kinds of surgery, rhinoplasty requires anesthesia.
        <div className="line-break" /> Depending on the particular case, it can be performed using general anesthesia.</>
    },
    {
      title: 'Surgery',
      image: "assets/rhinoplasty/sec06/img_2.png",
      text: <>The details of the surgery depend on the patient’s needs and the surgeon’s approach. During the surgery, nasal bones, nasal cartilage, and the skin covering the nose can be worked on.
        <div className="line-break" />Sometimes it may be necessary to remove parts of nasal tissues or add tissue inside the nose. If tissue addition is necessary, the required tissue may be taken from deeper parts of the nose, or other parts of the body.
        <div className="line-break" />Patient’s septum may also be corrected during the surgery to improve breathing. There are 2 main approaches to rhinoplasty: open method and the closed method.</>,

    },
    {
      title: 'Open And Closed Rhinoplasty',
      image: "assets/rhinoplasty/sec06/img_3.png",
      text: <>Our surgeons, while being highly skilled in both open and closed rhinoplasty, have specialized in the closed method which leaves no visible scars.
        <div className="line-break" />In this method, whole surgery is done inside the nostrils. In some cases, using the open method (in which an incision between the nostrils is made) may be necessary.</>,

    }
  ]
}

export function Section06(props) {

  const windowSize = useWindowSize();
  const isSmallScreen = windowSize.innerWidth < 991;


  return (
    <div className="section-06">
      <div className="block-1">
        <img className="illustration" src={data.illustration} />
        <h1 className="text1">How is a Rhinoplasty Done?</h1>
        <h2 className="text2">Complex surgery customized according to needs and wishes of the patient.</h2>
      </div>
      {data.listOfElements?.map((e, index) => (
        <div className="block-2">
          <img className="image" style={!isSmallScreen && { order: (index % 2 == 0) ? 0 : 1 } || {}} src={e.image} />
          <div className="content">
            <h1 className="heading">{e.title}</h1>
            <h2 className="description" >{e.text}</h2>
          </div>
        </div>
      ))}

    </div>
  );
}

