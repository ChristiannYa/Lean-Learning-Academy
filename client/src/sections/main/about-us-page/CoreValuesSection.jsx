import { coreValues } from '../../../constants/about-us';

const CoreValuesSection = () => {
  return (
    <section className="screenMain">
      <h2 className="subtitle text-primary text-2xl">Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {coreValues.map((value) => (
          <div
            key={value.id}
            className="bg-white/5 shadow-chessCard rounded-md p-4"
          >
            <h3 className="text-xl font-leagueSpartan text-white">
              {value.title}
            </h3>
            <p className="regularText text-white/70">{value.description}</p>
          </div>
        ))}
      </div>
      <p className="regularText text-white/80">
        These mission, vision, and values guide our academy in delivering
        impactful education and creating a nurturing learning atmosphere for all
        our students.
      </p>
    </section>
  );
};

export default CoreValuesSection;
