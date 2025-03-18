// components/GoogleMap.js
import React from "react";

interface Props {
  embedUrl: string;
}

const GoogleMap = ({ embedUrl }: Props) => {
  return (
    <div className="pt-20">
      <h2 className="text-center uppercase mb-[80px] text-gray-200 text-[18px] tracking-[10px]">
        Lokacija
      </h2>
      <div style={{ width: "100%", height: "400px", border: "none" }}>
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: "none" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
