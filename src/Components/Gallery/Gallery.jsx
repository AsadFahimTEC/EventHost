const Gallery = () => {
  return (
    <div className="mt-4 mb-2">
      <h1 className="text-center text-3xl text-[#111111] font-bold">
        Automated QR Scanner
      </h1>
      <h6 className="text-center text-md text-violet-600 mt-2">
        Scan & Verify The Attendees Directly By Our QR Scanning <br /> Solution.
      </h6>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 ml-28 mr-28">
        <div className="bg-[#F1F3FF] card">
          <img
            className="w-6 h-6"
            src="https://i.ibb.co/nQn46pm/click-1-1.png"
            alt=""
          />
          <h1 className="w-44 h-32 text-[#111111] font-bold text-xl">
            One Click
          </h1>
          <h1 className="text-md -mt-24">QR verification System</h1>
        </div>

        <div className="bg-[#F1F3FF] card">
          <img
            className="w-6 h-6"
            src="https://i.ibb.co/MNqpvvS/click.png"
            alt=""
          />
          <h1 className="w-44 h-32 text-[#111111] font-bold text-xl">
            One time
          </h1>
          <h1 className="text-md -mt-24">QR Code</h1>
        </div>

        <div className="bg-[#F1F3FF] card">
          <img
            className="w-6 h-6"
            src="https://i.ibb.co/ftq7r2b/check-1.png"
            alt=""
          />
          <h1 className="w-44 h-32 text-[#111111] font-bold text-xl">
            Easy Access
          </h1>
          <h1 className="text-md -mt-24">Fast users access</h1>
        </div>
        <div className="bg-[#F1F3FF] card">
          <img
            className="w-6 h-6"
            src="https://i.ibb.co/gJkp8yd/Vector-1.png"
            alt=""
          />
          <h1 className="w-44 h-32 text-[#111111] font-bold text-xl">Mail</h1>
          <h1 className="text-md -mt-24">Send bulk mail </h1>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
