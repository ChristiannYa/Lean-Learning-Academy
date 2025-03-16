import CurriculumSlider from '../../components/CurriculumSlider';
import { lessons } from '../../constants/courses/japanese';

const JapenseCurriculumCarousel = () => {
  return <CurriculumSlider 
    title="Japanese Curriculum" 
    lessons={lessons} 
    themeColor="var(--color-japanese)" 
  />;
};

export default JapenseCurriculumCarousel;
