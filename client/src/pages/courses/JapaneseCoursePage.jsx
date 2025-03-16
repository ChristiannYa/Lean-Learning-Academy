import JapeneseHeroSection from '../../sections/japanese-page/JapenseHeroSection';
import JapenseCurriculumSlider from '../../sections/japanese-page/JapenseCurriculumSlider';

const JapaneseCoursePage = () => {
  return (
    <div className="pageHeroCentered">
      <JapeneseHeroSection />
      <div className="screenMain">
        <JapenseCurriculumSlider />
      </div>
    </div>
  );
};

export default JapaneseCoursePage;
