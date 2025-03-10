import HeroSection from '../../sections/main/landing-page/HeroSection';
import Card from '../../sections/main/landing-page/Card';
import { landingPageCards } from '../../constants/landing-page';

const LandingPage = () => {
  return (
    <div className="page">
      <div className="screenMain">
        <HeroSection />
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
