"use client";

import ReactPlayer from "react-player";

const BandeAnnonce = ({ lien }) => {
  return (
    <div style={{ border: "2px dashed var(--or)", borderRadius: "12px", padding: "0.75rem", background: "var(--papier)" }}>
      <ReactPlayer src={lien} controls width="100%" height="450px" />
    </div>
  );
};
export default BandeAnnonce;