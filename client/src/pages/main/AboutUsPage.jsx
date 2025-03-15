import { instructors } from '../../constants/about-us';
import AboutIntroductionSection from '../../sections/main/about-us-page/AboutIntroductionSection';
import InstructorCard from '../../sections/main/about-us-page/InstructorCard';
import MissionVisionSection from '../../sections/main/about-us-page/MissionVisionSection';
import CoreValuesSection from '../../sections/main/about-us-page/CoreValuesSection';

const AboutUsPage = () => {
  return (
    <div className="page">
      <AboutIntroductionSection />
      <MissionVisionSection />
      <CoreValuesSection />

      <div className="screenMain">
        <h2 className="subtitle text-primary text-2xl">Our Instructors</h2>
        <div className="flexcol-center gap-y-8">
          {instructors.map((instructor) => (
            <InstructorCard
              key={instructor.id}
              title={instructor.title}
              name={instructor.name}
              description={instructor.description}
              imagePath={instructor.imagePath}
              course={instructor.course}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
