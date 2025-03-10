import ChessHeroSection from '../../sections/chess-page/ChessHeroSection';
import ChessInformationCard from '../../sections/chess-page/ChessInformationCard';
import ChessCurriculumCarousel from '../../sections/chess-page/ChessCurriculumCarousel';
import { chessInformationCards } from '../../constants/chess-information-cards';
import AboutInstructor from '../../sections/chess-page/AboutInstructor';

const ChessCoursePage = () => {
  return (
    <div className="page">
      <ChessHeroSection />
      <div className="flex flex-wrap gap-6 justify-center">
        {chessInformationCards.map((card) => (
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
        <ChessCurriculumCarousel />
      </div>
      <AboutInstructor />
    </div>
  );
};

export default ChessCoursePage;
