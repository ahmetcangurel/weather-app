import * as React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import type { SvgProps } from "react-native-svg";
const SvgSun = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 29 30"
    {...props}
  >
    <G filter="url(#sun_svg__a)">
      <Path
        fill="url(#sun_svg__b)"
        d="M28.415 14.88c0 7.813-6.274 14.146-14.014 14.146S.386 22.694.386 14.88 6.661.733 14.401.733 28.415 7.067 28.415 14.88"
      />
    </G>
    <Defs>
      <LinearGradient
        id="sun_svg__b"
        x1={12.272}
        x2={23.967}
        y1={22.58}
        y2={2.26}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F90" />
        <Stop offset={1} stopColor="#FFEE94" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgSun;
