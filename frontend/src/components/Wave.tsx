import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import Icon from "./Icon";

const WaveSvg = styled(Icon)`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const Wave = () => {
  const themeContext = useContext(ThemeContext);

  const getWaveGradient = (): [string, string] => {
    const currentTheme: string = themeContext.mode;

    return currentTheme === "light"
      ? ["#F093FB", themeContext.primaryColor]
      : ["#BCE6F8", themeContext.primaryColor];
  };

  return (
    <WaveSvg viewBox="0 0 1440 210">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,160C672,171,768,245,864,229.3C960,213,1056,107,1152,69.3C1248,32,1344,64,1392,80L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        fill="url(#wave-gradient)"
      />
      <defs>
        <linearGradient
          id="wave-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={getWaveGradient()[0]} />
          <stop offset="1" stopColor={getWaveGradient()[1]} />
        </linearGradient>
      </defs>
    </WaveSvg>
  );
};

export default Wave;
