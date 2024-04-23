import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { useRef } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import CookiesPolicy from "./CookiesPolicy";
import TermsAndConditionsPage from "./TermsAndConditionsPage";
import { Link } from "react-router-dom";

const Footer = () => {
  const modalContentRef1 = useRef(null);
  const modalContentRef2 = useRef(null);
  const modalContentRef3 = useRef(null);
  const showModalAndScrollToTop = () => {
    // Show modal
    const modal = document.getElementById("my_modal_1");
    if (modal) {
      modal.showModal();
    }

    // Scroll modal content to top
    if (modalContentRef1.current) {
      modalContentRef1.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const newShowModalAndScrollToTop = () => {
    // Show modal
    const modal = document.getElementById("my_modal_2");
    if (modal) {
      modal.showModal();
    }

    // Scroll modal content to top
    if (modalContentRef2.current) {
      modalContentRef2.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  const newNewShowModalAndScrollToTop = () => {
    // Show modal
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.showModal();
    }

    // Scroll modal content to top
    if (modalContentRef3.current) {
      modalContentRef3.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <footer className="footer bg-[#591BFF] items-center  p-4 text-white border-t  mt-12">
        <aside style={{ width: "200px" }}>
          <img
            className="h-6 w-36 ml-20"
            src="https://i.ibb.co/K7MQQJp/Event-Host.png"
            alt=""
          />
          <h6 className="ml-20 mt-2">IDEA Project, ICT Tower (0th Floor), <br />Plot: E-14X, Agargaon, Dhaka - 1207 <br /> 02222-222222, 01111111111</h6>
        </aside>
        <nav>
       

          <Link
            to={"/"}
            className="link link-hover hover:translate-x-2"
          >
            Home
          </Link>
          <Link
            to={"/"}
            className="link link-hover hover:translate-x-2"
          >
            Events
          </Link>
          <Link to={"/"} className="link link-hover hover:translate-x-2">
            About Us
          </Link>
          <Link
            to={"/"}
            className="link link-hover hover:translate-x-2"
          >
            Contact
          </Link>
        </nav>
       
        <nav>
          <button
            className="hover:translate-x-2 link link-hover"
            onClick={showModalAndScrollToTop}
          >
            Event Dashboard
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box" ref={modalContentRef1}>
              <TermsAndConditionsPage></TermsAndConditionsPage>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn bg-[#006bcb] text-white hover:bg-[#1659a6]">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
          <button
            className="hover:translate-x-2 link link-hover"
            onClick={newShowModalAndScrollToTop}
          >
            Terms & Condition
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box" ref={modalContentRef2}>
              <PrivacyPolicy></PrivacyPolicy>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn bg-[#006bcb] text-white hover:bg-[#1659a6]">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
          <button
            className="hover:translate-x-2 link link-hover"
            onClick={newNewShowModalAndScrollToTop}
          >
            Privacy & Refund Policy
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box" ref={modalContentRef3}>
              <CookiesPolicy></CookiesPolicy>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn bg-[#006bcb] text-white hover:bg-[#1659a6]">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </nav>
        <nav>
          <h1 className="text-white">Follow US</h1>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl hover:scale-150"></FaTwitter>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://youtube.com/"
              target="_blank"
            >
              <FaYoutube className="text-2xl hover:scale-150"></FaYoutube>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://facebook.com/"
              target="_blank"
            >
              <FaFacebook className="text-2xl hover:scale-150"></FaFacebook>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
