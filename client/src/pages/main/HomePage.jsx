import About from '../../sections/landing-page/About';
import Card from '../../sections/landing-page/Card';
import { landingPageCards } from '../../constants/landing-page';

const LandingPage = () => {
  return (
    <div>
      <div className="screenMain">
        <About />
        <div className="flexrow-center gap-x-12 gap-y-6 flex-wrap mt-12">
          {landingPageCards.map((card) => (
            <Card key={card.id} icon={card.icon} text={card.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
