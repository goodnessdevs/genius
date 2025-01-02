import React from "react";

const DocDetails = ({ doc }) => {
  return (
    <div className="my-10 text-xl tracking-wider font-serif text-zinc-700 space-y-8">
      <h2 className="text-3xl my-4 mx-2 font-playwrite">{doc.name}</h2>
      <p >{doc.earlyLife}</p>
      <p>{doc.earlyCareer}</p>
      <p>{doc.achievements}</p>
      <p>{doc.laterLife}</p>
      <p>{doc.impact}</p>
    </div>
  );
};

export default DocDetails;
