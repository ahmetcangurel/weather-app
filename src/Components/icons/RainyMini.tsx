import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRainyMini = (props: SvgProps) => (
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
      d="M12.635 15.186a.59.59 0 0 1 .168.815l-1.933 2.94a.588.588 0 0 1-.982-.647l1.933-2.94a.59.59 0 0 1 .814-.168M10.872 12.247a.59.59 0 0 1 .167.814L8.717 16.59a.588.588 0 0 1-.982-.647l2.322-3.527a.59.59 0 0 1 .815-.168"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M13.297 3.416a4.41 4.41 0 0 0-5.27 4.325.588.588 0 0 1-1.175 0q0-.435.066-.859a3 3 0 0 0-.357-.023h-.003a2.646 2.646 0 0 0 0 5.291h5.879a4.41 4.41 0 0 0 .86-8.734M7.222 5.74a5.585 5.585 0 1 1 5.215 7.586h-5.88a3.822 3.822 0 0 1 0-7.643"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRainyMini;
