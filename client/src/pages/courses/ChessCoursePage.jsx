import ChessHeroSection from '../../sections/chess-page/ChessHeroSection';
import ChessInformationCard from '../../sections/chess-page/ChessInformationCard';
import ChessCurriculumSlider from '../../sections/chess-page/ChessCurriculumSlider';
import AboutInstructor from '../../sections/chess-page/AboutInstructor';
import BottomDecoration from '../../sections/chess-page/BottomDecoration';
import { informationCards } from '../../constants/courses/chess';

const ChessCoursePage = () => {
  return (
    <div className="pageHeroCentered">
      <ChessHeroSection />
      <div className="screenLarge flex flex-wrap gap-6 justify-center">
        {informationCards.map((card) => (
          <ChessInformationCard
            key={card.id}
            title={card.title}
            content={card.content}
            sourceLink={card.sourceLink}
            sourceLinkText={card.sourceLinkText}
          />
        ))}
      </div>
      <div className="screenMain">
        <ChessCurriculumSlider />
      </div>
      <AboutInstructor />
      <BottomDecoration />
    </div>
  );
};

export default ChessCoursePage;
