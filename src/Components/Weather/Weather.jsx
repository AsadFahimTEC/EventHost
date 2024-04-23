const Weather = () => {
  return (
    <div className="mt-4 mb-2">
      <h1 className="text-center text-3xl text-[#111111] font-bold">
        Simplify Ticketing
      </h1>
      <h6 className="text-center text-md text-violet-600 mt-2">
        First Ever Unique QR Ticketing <br /> Platform For Event Registration &
        Booking
      </h6>
      <button className="bg-violet-600 px-4 py-2 rounded-lg text-white flex items-center mx-auto mt-4">
        <img
          className="w-4 h-4 mr-2"
          src="https://i.ibb.co/G24jFw4/fi-sr-shield-check.png"
          alt=""
        />
        Secure Payment with
      </button>
      {/* payments */}
      <div className="flex items-center justify-center gap-1 mt-4 ml-28 mr-28">
        <h1 className="bg-[#8C3494] w-[250px] h-[250px] mt-12 rounded-lg">
          <img
            className="mx-auto mt-24"
            src="https://i.ibb.co/7pt5T8F/dutch-bangla-rocket-logo-B4-D1-CC458-D-seeklogo-1.png"
            alt=""
          />
        </h1>

        <h1 className="bg-[#ED0A80] w-[250px] h-[300px] rounded-lg">
          <img
            className="mx-auto mt-20"
            src="https://i.ibb.co/SRC3p8m/image-9.png"
            alt=""
          />
        </h1>
        <h1 className="bg-[#F7941D] w-[250px] h-[250px] rounded-lg mt-12">
          <img
            className="mx-auto mt-24"
            src="https://i.ibb.co/tBH20y5/Group-40.png"
            alt=""
          />
        </h1>
      </div>
    </div>
  );
};

export default Weather;
