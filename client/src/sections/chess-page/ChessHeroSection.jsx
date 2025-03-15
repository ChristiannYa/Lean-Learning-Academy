import chessPageImages from '../../assets/images/chess-page';

const ChessHeroSection = () => {
  return (
    <section className="heroSection flexcol-center">
      <div className="flexcol-center screenMain">
        <div className="text-white">
          <div className="flexrow-center gap-x-1">
            <h1 className="mainTitle">Master The Basics of Chess</h1>
          </div>
          <h2 className="mainText text-center font-bold">
            Guaranteed 800 ELO score to get you started
          </h2>
          <h3 className="mainText text-center">
            Learn essential tactics, positioning principles, how to think in
            chess, and more!
          </h3>
        </div>
        <div className="customLineBreak"></div>
        <img
          src={chessPageImages.chess}
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

export default ChessHeroSection;
