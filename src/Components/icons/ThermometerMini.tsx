import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgThermometerMini = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M16.343 5.977a.882.882 0 1 0 0 1.763.882.882 0 0 0 0-1.763m-2.057.882a2.058 2.058 0 1 1 4.115 0 2.058 2.058 0 0 1-4.115 0M9.582 2.743a1.764 1.764 0 0 0-1.764 1.764v7.276H7.23l.362.463a3.233 3.233 0 1 0 3.98 0 .59.59 0 0 1-.226-.463V4.507a1.764 1.764 0 0 0-1.764-1.764m-2.94 8.765V4.507a2.94 2.94 0 1 1 5.88 0v7.001a4.41 4.41 0 1 1-5.88 0"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M9.582 13.914a.882.882 0 1 0 0 1.764.882.882 0 0 0 0-1.764m-2.058.882a2.058 2.058 0 1 1 4.116 0 2.058 2.058 0 0 1-4.116 0"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M9.66 6.91c.327 0 .592.265.592.593v5.93a.593.593 0 0 1-1.186 0v-5.93c0-.328.266-.593.593-.593"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgThermometerMini;
