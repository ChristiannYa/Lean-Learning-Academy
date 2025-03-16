import CurriculumSlider from '../../components/CurriculumSlider';
import { lessons } from '../../constants/courses/chess';

const ChessCurriculumCards = () => {
  return (
    <CurriculumSlider
      title="Chess Curriculum"
      lessons={lessons}
      themeColor="var(--color-chess)"
    />
  );
};

export default ChessCurriculumCards;
