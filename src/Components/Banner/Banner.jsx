const Banner = () => {
  return (
    <div className="mt-8 md:mt-16 lg:mt-28 ml-4 md:ml-8 lg:ml-24 mr-4 md:mr-8 lg:mr-24 mb-8 md:mb-16 lg:mb-24">
      <img className="w-full md:w-auto" src="https://i.ibb.co/rvS94hF/Rectangle-8.png" alt="" />
      <div className="-mt-24 md:-mt-32 lg:-mt-48 ml-4 md:ml-8 lg:ml-12 mb-4 md:mb-8 lg:mb-12">
        <h1 className="text-lg md:text-2xl lg:text-3xl text-white">CMA Fest</h1>
        <h6 className="text-xs md:text-sm lg:text-md text-white mt-2">
          Make memories that will last a lifetime. See your favorite <br />{" "}
          artists live at CMA Fest!
        </h6>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <button className="bg-blue-600 p-2 rounded-lg text-white">Get Ticket</button>
          <button className="bg-[#f1f3ff] p-2 rounded-lg text-black">Explore All Events</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
