const Slider = () => {
  return (
    <div className="mt-16 mb-16">
      <div>
        <h1 className="text-4xl text-[#111111] text-center font-bold">
          Events
        </h1>
        <div className="mt-4 flex items-center justify-center gap-12 ml-36 mr-36">
          <h1>All</h1>
          <h1>For You</h1>
          <h1>This Day</h1>
          <h1>This Week</h1>
          <h1 className="border-transparent border border-b-2 bg-violet-600 rounded-lg px-3 py-1 text-white">
            Music
          </h1>
          <h1>Union</h1>
        </div>
        {/* cards */}
        <div className="mt-4 flex flex-wrap justify-center gap-8">
          <img
            className="card"
            src="https://i.ibb.co/ct8p6Qw/Rectangle-16.png"
            alt=""
            style={{ width: "100%", maxWidth: "350px", height: "auto" }}
          />
          <img
            className="card"
            src="https://i.ibb.co/NC1K110/Rectangle-16-1.png"
            alt=""
            style={{ width: "100%", maxWidth: "350px", height: "auto" }}
          />
          <img
            className="card"
            src="https://i.ibb.co/PWwPGYh/Rectangle-16-2.png"
            alt=""
            style={{ width: "100%", maxWidth: "350px", height: "auto" }}
          />
        </div>

        <div className="mt-2 flex items-center justify-center gap-4">
          {/* one */}
          <div>
            <h1 className="ml-28">
              -------------------------------------------
            </h1>
            <h1 className="ml-28">Music</h1>
            <div className="flex gap-16 ml-28">
              <h1>Celebrity Convention Hall</h1>
              <h1>Apr</h1>
            </div>
            <div className="ml-96">
              <h1 className="-ml-8 text-violet-600 text-2xl">20</h1>
              <h1 className="-ml-12">10.00 PM</h1>
            </div>
            <h1 className="ml-28 text-[#111111] font-bold">
              ROUFIAN’S HSC-24 RAG DAy
            </h1>
            <div className="flex flex-col md:flex-row gap-4 mt-4 ml-28">
              <button className="bg-violet-600 p-2 rounded-lg text-white">
                Get Ticket
              </button>
              <button className="text-violet-600 bg-white p-2 rounded-lg">
                20 Seat <br /> <span className="ml-4">Left</span>
              </button>
              <button className="p-2 rounded-lg text-violet-600">
                See More
              </button>
            </div>
          </div>
          {/* two */}
          <div className="-ml-28">
            <h1 className="ml-40">
              -------------------------------------------
            </h1>
            <h1 className="ml-40">Music</h1>
            <div className="flex gap-16 ml-40">
              <h1>Celebrity Convention Hall</h1>
              <h1>Apr</h1>
            </div>
            <div className="ml-96">
              <h1 className="ml-4 text-violet-600 text-2xl">20</h1>
              <h1 className="ml-2">10.00 PM</h1>
            </div>
            <h1 className="ml-40 text-[#111111] font-bold">
              ROUFIAN’S HSC-24 RAG DAy
            </h1>
            <div className="flex flex-col md:flex-row gap-4 mt-4 ml-40">
              <button className="bg-violet-600 p-2 rounded-lg text-white">
                Get Ticket
              </button>
              <button className="text-violet-600 bg-white p-2 rounded-lg">
                20 Seat <br /> <span className="ml-4">Left</span>
              </button>
              <button className="p-2 rounded-lg text-violet-600">
                See More
              </button>
            </div>
          </div>
          {/* three */}
          <div className="mr-36 -ml-20">
            <h1 className="ml-40">
              -------------------------------------------
            </h1>
            <h1 className="ml-40">Music</h1>
            <div className="flex gap-16 ml-40">
              <h1>Celebrity Convention Hall</h1>
              <h1>Apr</h1>
            </div>
            <div className="ml-96">
              <h1 className="ml-4 text-violet-600 text-2xl">20</h1>
              <h1 className="ml-2">10.00 PM</h1>
            </div>
            <h1 className="ml-40 text-[#111111] font-bold">
              ROUFIAN’S HSC-24 RAG DAy
            </h1>
            <div className="flex flex-col md:flex-row gap-4 mt-4 ml-40">
              <button className="bg-violet-600 p-2 rounded-lg text-white">
                Get Ticket
              </button>
              <button className="text-violet-600 bg-white p-2 rounded-lg">
                20 Seat <br /> <span className="ml-4">Left</span>
              </button>
              <button className="p-2 rounded-lg text-violet-600">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
