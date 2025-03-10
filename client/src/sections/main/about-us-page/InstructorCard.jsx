import PropTypes from 'prop-types';

const InstructorCard = ({ title, name, description, imagePath, course }) => {
  return (
    <div className="bg-gray-500 rounded-lg p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-neutral-white/50 rounded-full w-[300px] h-[300px] flex-shrink-0">
          <img
            src={imagePath}
            alt={`${name} - ${course} Instructor`}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="subtitle text-white/90 text-2xl text-start">
            {title}
          </h2>
          <div className="space-y-1">
            <p className="regularText text-white/70">{description}</p>
            <div className="bg-neutral-white text-tertiary text-sm font-semibold rounded-full px-3 py-1 w-fit">
              <p>{course} Instructor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

InstructorCard.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  imagePath: PropTypes.string,
  course: PropTypes.string.isRequired,
};

export default InstructorCard;
