import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDropMini = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 19 20"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="m9.926 1.386-.337.482-.338-.482a.59.59 0 0 1 .675 0m-.337 1.217a18.536 18.536 0 0 0-2.496 2.37C5.656 6.624 4.297 8.84 4.297 11.275a5.291 5.291 0 1 0 10.583 0c0-2.434-1.36-4.65-2.795-6.302a18.5 18.5 0 0 0-2.496-2.37M9.25 1.386l.338.482.337-.482.002.002.004.003.015.01a7 7 0 0 1 .251.187A19.704 19.704 0 0 1 12.972 4.2c1.503 1.73 3.084 4.216 3.084 7.074a6.467 6.467 0 1 1-12.935 0c0-2.858 1.58-5.345 3.084-7.074A19.7 19.7 0 0 1 8.98 1.588a11 11 0 0 1 .25-.187l.016-.01.004-.003z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M13.165 11.29c.32.056.534.36.48.68a4.11 4.11 0 0 1-3.363 3.353.588.588 0 0 1-.196-1.16 2.93 2.93 0 0 0 2.4-2.393.59.59 0 0 1 .679-.48"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgDropMini;
