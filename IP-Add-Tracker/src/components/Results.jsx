import React from "react";

const Results = ({ response }) => {
  const ipAddress = response.ip;
  const location = `${response.location.region}, ${response.location.country}`;
  const timezone = response.location.timezone;
  const isp = response.isp;
  return (
    <div className="results-wrapper">
      <p>
        IP Address<span>{ipAddress}</span>
      </p>
      <p>
        Location<span>{location}</span>
      </p>
      <p>
        Timezone<span>{timezone}</span>
      </p>
      <p>
        ISP<span>{isp}</span>
      </p>
    </div>
  );
};

export default Results;
