import axios from "axios";
import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const [isOpenState, setIsOpenState] = useState(isOpen);

  // Function to close the modal
  const handleClose = () => {
    setIsOpenState(false);
    onClose();
  };

  // If modal is not open, return null
  if (!isOpenState) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Modal content */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-scroll shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full">
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {/* Close button */}
            <div className="absolute top-0 right-0 pt-4 pr-4">
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal content */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const Toprated = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [movies, setMovies] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=8adb22a497bd258ef5ac7c8fac43cd5b";

  useEffect(() => {
    async function displayAllMovies() {
      try {
        const response = await axios.get(url);
        const responseJson = response.data.results; // Access the 'results' property
        console.log("response", responseJson);
        setMovies(responseJson);
      } catch (error) {
        console.log(error);
      }
    }
    displayAllMovies();
  }, []);

  

  const handleOpenModal = (id) => {
    setSelectedMovieId(id);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="px-8 mx-auto flex flex-col gap-10">
      <section>
        <h1 className="text-2xl font-bold">Top Rated</h1>
      </section>

      <section className="flex flex-row gap-5 flex-wrap justify-center">
        {/* Movie card */}
        <div className="shadow-md" onClick={() => handleOpenModal(1)}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
            alt="avengers"
            width="300px"
            height="500px"
          />

          <div className="flex flex-col text-center p-3 relative">
            <h2>
              <span className="text-xl font-semibold">Avengers</span> (2012)
            </h2>
            <p className="text-xs font-light">02 hours 30 minutes</p>
            {/* <div className="bg-orange-500 rounded-full w-12 h-12 mx-auto flex items-center mt-2 absolute top-[-30px] right-2"> */}
            <div className="bg-orange-500 rounded-full w-12 h-12 mx-auto flex items-center mt-2">
              <p className="p-1 ps-2 text-white">80%</p>
            </div>
          </div>
        </div>

        {isOpen && (
          <Modal isOpen={isOpen} onClose={handleCloseModal}>
            {/* Modal content */}
            <div className="flex flex-row gap-5">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
                alt="Avengers"
                width="400px"
                height="700px"
              />
              <div className="flex flex-col">
                <h2 className="text-3xl">
                  <span className="font-semibold">Avengers</span>
                  (2012)
                </h2>

                <div className="flex flex-row mt-2 items-center">
                  <span className="text-xs border border-1 border-grey-400 px-2 py-1 rounded-full">
                    Action
                  </span>
                  &nbsp;
                  <span className="text-xs border border-1 border-grey-400 px-2 py-1 rounded-full">
                    Sci-Fi
                  </span>
                  <p className="text-xs font-light ms-3">02 hours 30 minutes</p>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </section>
    </div>
  );
};

export default Toprated;
