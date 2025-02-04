const About = () => {
  return (
    <div className="section-padding bg-white" id="about">
      <div className="max-w-4xl mx-auto fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          About Me
        </h2>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-4">
            I'm a passionate developer with a keen eye for creating beautiful and functional web applications. With several years of experience in full-stack development, I specialize in building responsive and user-friendly interfaces.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;