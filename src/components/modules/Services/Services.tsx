'use client';

const Services = () => {
  return (
    <div className="my-20">
      <h1 className="text-3xl sm:text-4xl pb-6 bg-[#1e013a] text-center text-cyan-400 font-bold">
        Services
      </h1>

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: 'url(https://i.ibb.co/r5bfjH8/drak-blue-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-4 md:px-8 lg:px-20 py-10">
          {/* Web Development */}
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-full md:w-1/2 border-2 border-cyan-300 p-4 rounded-xl bg-[#00000050] backdrop-blur-md"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
              Web Development
            </h2>
            <div className="glass p-4 mt-6 text-sm sm:text-base text-gray-300">
              Web Development involves creating website interfaces using HTML,
              CSS, and JavaScript. It emphasizes user experience, responsive
              design, and interaction to ensure visually appealing and
              functional websites.
            </div>
            <div className="glass p-4 mt-4 text-sm sm:text-base text-gray-300">
              Web developers collaborate with back-end teams to deliver
              seamless, user-centric web applications.
            </div>
          </div>

          {/* Responsive Design */}
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-full md:w-1/2 border-2 border-cyan-300 p-4 rounded-xl bg-[#00000050] backdrop-blur-md"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
              Responsive Design
            </h2>
            <div className="glass p-4 mt-6 text-sm sm:text-base text-gray-300">
              Responsive design adapts websites for diverse devices, optimizing
              layout and content. It employs CSS media queries and flexible
              grids, ensuring seamless user experiences on desktops, tablets,
              and mobiles.
            </div>
            <div className="glass p-4 mt-4 text-sm sm:text-base text-gray-300">
              This practice enhances accessibility, boosts user engagement, and
              aligns with modern web standards.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
