'use client';

const Services = () => {
  return (
    <div className="my-20">
       <h1
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="text-4xl text-center text-cyan-400 font-bold mb-12"
        >
           S
          <span className="bg-gradient-to-b from-white to-cyan-600 bg-clip-text text-transparent">ERVICES </span>-
        </h1>

      {/* Background image section */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.ibb.co/r5bfjH8/drak-blue-bg.png')",
        }}
      >
        {/* This container ensures content stays inside the background */}
        <div className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-10 py-12 bg-[#00000088] backdrop-blur-sm">
          <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
            {/* Web Development Card */}
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="border-2 border-cyan-500 p-6 rounded-xl bg-[#0f172ab3] backdrop-blur-md"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
                Web Development
              </h2>
              <div className="mt-6 text-sm sm:text-base text-gray-300 space-y-4">
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
              className="border-2 border-cyan-500 p-6 rounded-xl bg-[#0f172ab3] backdrop-blur-md"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
                Responsive Design
              </h2>
              <div className="mt-6 text-sm sm:text-base text-gray-300 space-y-4">
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
