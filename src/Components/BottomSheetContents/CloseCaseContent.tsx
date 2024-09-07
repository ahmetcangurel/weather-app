import React from "react";

// Components
import WeatherInfoItem from "../WeatherInfoItem";

const CloseCaseContent = () => {
  return (
    <>
      <WeatherInfoItem
        icon="sunset"
        sectionData={[
          {
            title: "Sunset",
            subtitle: "5:51 PM",
          },
          {
            title: "Sunsire",
            subtitle: "7:00 AM",
          },
        ]}
      />
      <WeatherInfoItem
        icon="sunny"
        sectionData={[
          {
            title: "UV Index",
            subtitle: "1 Low",
          },
        ]}
      />
    </>
  );
};

export default CloseCaseContent;
