import japaneseAssets from '../../assets/images/japanese-page';

const JapeneseHeroSection = () => {
  return (
    <section className="heroSection flexcol-center">
      <div className="flexcol-center screenMain">
        <div className="text-white">
          <div className="flexrow-center gap-x-1">
            <h1 className="mainTitle">Begin Your Journey in Japanese</h1>
          </div>
          <h2 className="mainText text-center font-bold">
            Build a strong foundation in just 12 weeks
          </h2>
          <h3 className="mainText text-center">
            Master essential grammar, vocabulary, and cultural insights with
            structured lessons!
          </h3>
        </div>
        <div className="customLineBreak" style={{"--line-color": "var(--color-japanese)"}}></div>
        <img
          src={japaneseAssets.japaneseLanding}
          width={380}
          alt=""
          className="rounded-sm mb-5"
        />
        <button className="text-white font-patrickHand text-3xl cursor-pointer">
          Start Learning Now
        </button>
      </div>
    </section>
  );
};

export default JapeneseHeroSection;
