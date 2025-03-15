import CurriculumCarousel from '../../components/CurriculumCarousel';
import { lessons } from '../../constants/courses/chess';

const ChessCurriculumCards = () => {
  return <CurriculumCarousel title="Chess Curriculum" lessons={lessons} />;
};

export default ChessCurriculumCards;
