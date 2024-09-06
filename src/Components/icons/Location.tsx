import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLocation = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <Path
      fill="#fff"
      d="M13.747 5.633c-.7-3.08-3.386-4.466-5.746-4.466h-.007c-2.353 0-5.047 1.38-5.747 4.46-.78 3.44 1.327 6.353 3.234 8.186A3.62 3.62 0 0 0 8 14.833c.906 0 1.813-.34 2.513-1.02 1.907-1.833 4.013-4.74 3.233-8.18"
      opacity={0.4}
    />
    <Path
      fill="#fff"
      d="M8.001 8.973a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2"
    />
  </Svg>
);
export default SvgLocation;
