const MissionVisionSection = () => {
  return (
    <section className="screenMain space-y-6">
      <div className="bg-white/5 shadow-chessCard rounded-md p-6">
        <h2 className="subtitle text-primary text-2xl">Mission Statement</h2>
        <p className="regularText text-justify text-neutral-white">
          At The Lean Learning Academy, we are dedicated to empowering individuals with tailored courses 
          that promote strategic thinking and the lean learning approach. Whether you&apos;re keen on 
          mastering chess to enhance your skills, learning conversational English or Japanese for travel, 
          or capturing memories through photography with a cinematic flair, our expert team is here to 
          guide you every step of the way.
        </p>
      </div>
      
      <div className="bg-white/5 shadow-chessCard rounded-md p-6">
        <h2 className="subtitle text-primary text-2xl mb-3">Vision Statement</h2>
        <p className="regularText text-justify text-neutral-white">
          Our vision is to become the leading global academy renowned for innovative learning 
          experiences that inspire creativity and strategic thinking in every individual. We aim to 
          be the go-to choice for learners seeking to expand their skills in a diverse range of subjects, 
          fostering a community of lifelong learners who thrive on knowledge and creativity.
        </p>
      </div>
    </section>
  );
};

export default MissionVisionSection;
