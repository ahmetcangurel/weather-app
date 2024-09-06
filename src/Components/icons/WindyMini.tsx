import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWindyMini = (props: SvgProps) => (
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
      d="M11.352 12.15a2.352 2.352 0 1 1-2.205 3.165.588.588 0 1 1 1.104-.407 1.175 1.175 0 1 0 1.102-1.582H3.12a.588.588 0 0 1 0-1.176zM9.479 5.196a1.176 1.176 0 0 0-1.58.668.588.588 0 0 1-1.104-.407 2.352 2.352 0 1 1 2.206 3.165H1.945a.588.588 0 1 1 0-1.175h7.056a1.178 1.178 0 0 0 .966-1.848 1.2 1.2 0 0 0-.488-.403"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M15.946 7.547a1.176 1.176 0 0 0-1.58.669.588.588 0 0 1-1.103-.407 2.35 2.35 0 1 1 2.205 3.165H2.533a.588.588 0 1 1 0-1.176h12.935a1.178 1.178 0 0 0 .966-1.848 1.2 1.2 0 0 0-.488-.403"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgWindyMini;
