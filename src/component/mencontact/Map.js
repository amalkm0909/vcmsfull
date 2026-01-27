import React from "react";

function Map() {
  return (
    <>
      <div className="map fix" style={{ background: "#f5f5f5" }}>
        <div className="container-flud">
          <div className="row">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps?q=Viswam+College+of+Management+Studies,+Kaloor,+Ernakulam,+Kerala&output=embed"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VCMS Kerala Location"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Map;
