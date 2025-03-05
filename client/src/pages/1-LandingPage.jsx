import About from '../sections/1_landing-page/About';
import Card from '../sections/1_landing-page/Card';
import { landingPageCards } from '../constants/1_landing-page';

const LandingPage = () => {
  return (
    <div className="bg-tertiary min-h-screen pt-8">
      <div className="screenMain">
        <About />
        <div className="flexrow-center gap-x-12 gap-y-6 flex-wrap mt-12">
          {landingPageCards.map((card) => (
            <Card
              key={card.id}
              icon={card.icon}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
