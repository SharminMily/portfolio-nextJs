'use client';

const Services = () => {
  return (
  <div className="my-4 sm:my-6 md:my-8 lg:my-16">
  <h1
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
    className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-center text-cyan-400 font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-12"
  >
    S
    <span className="bg-gradient-to-b from-white to-cyan-600 bg-clip-text text-transparent">ERVICES </span>-
  </h1>

  {/* Background image section */}
  <div
    className="w-full bg-cover bg-center bg-no-repeat min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-screen"
    style={{
      backgroundImage: "url('https://i.ibb.co/r5bfjH8/drak-blue-bg.png')",
    }}
  >
    {/* This container ensures content stays inside the background */}
    <div className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-screen flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-12 bg-[#00000088] backdrop-blur-sm">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-6xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {/* Web Development Card */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="border-2 border-cyan-500 p-2 sm:p-4 md:p-6 rounded-xl bg-[#0f172ab3] backdrop-blur-md"
        >
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-white text-center">
            Web Development
          </h2>
          <div className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 space-y-2 sm:space-y-3">
            <p>
              Web Development involves creating website interfaces using
              HTML, CSS, and JavaScript. It emphasizes user experience,
              responsive design, and interaction to ensure visually
              appealing and functional websites.
            </p>
            <p>
              Web developers collaborate with back-end teams to deliver
              seamless, user-centric web applications.
            </p>
          </div>
        </div>

        {/* Responsive Design Card */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="border-2 border-cyan-500 p-2 sm:p-4 md:p-6 rounded-xl bg-[#0f172ab3] backdrop-blur-md"
        >
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-white text-center">
            Responsive Design
          </h2>
          <div className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 space-y-2 sm:space-y-3">
            <p>
              Responsive design adapts websites for diverse devices,
              optimizing layout and content. It employs CSS media queries
              and flexible grids, ensuring seamless user experiences on
              desktops, tablets, and mobiles.
            </p>
            <p>
              This practice enhances accessibility, boosts user engagement,
              and aligns with modern web standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Services;
