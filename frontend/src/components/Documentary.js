import { useState, useEffect } from "react";

import Authentication from "./Authentication";
import Footer from "./Footer";
import DocDetails from "./DocDetails";

const Documentary = ({ _id }) => {
  const [docs, setDocs] = useState(null);
  const [selectedDoc, setSelectedDoc] = useState(null);

  useEffect(() => {
    const fetchDocs = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/documentary`
      );
      const data = await response.json();

      if (response.ok) {
        setDocs(data);
      }
    };

    fetchDocs();
  }, []);

  return (
    <div
      className={`bg-oldPaper bg-no-repeat bg-cover bg-center whitespace-normal break-words md:ml-52 h-full`}
    >
      <div className="px-12 py-6">
        <div>
          <Authentication />
        </div>

        <div className={`p-5 rounded-2xl shadow-2xl`}>
          {selectedDoc ? (
            <div>
              <button
                onClick={() => setSelectedDoc(null)}
                className="flex text-yellow-300 shadow-lg bg-black rounded p-2 hover:rounded-3xl"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>{" "}
                Back
              </button>

              <DocDetails doc={selectedDoc} />
            </div>
          ) : (
            docs &&
            docs.map((doc, index) => (
              <div
                key={index}
                onClick={() => setSelectedDoc(doc)}
                className="cursor-pointer p-4 border border-black rounded-sm mb-2"
              >
                <h2 className="text-zinc-800 text-xl">{doc.name}</h2>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Documentary;
