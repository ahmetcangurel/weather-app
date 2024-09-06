import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowDown = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 12 10"
    {...props}
  >
    <Path
      fill="#fff"
      d="M4.869 9.63c-.058-.056-.306-.27-.51-.468C3.076 7.997.976 4.958.335 3.367.232 3.125.014 2.514 0 2.188q0-.468.218-.895c.204-.355.525-.64.904-.795.263-.1 1.05-.256 1.064-.256C3.047.086 4.446 0 5.992 0c1.473 0 2.815.086 3.689.213.014.015.992.17 1.327.341.612.313.992.924.992 1.578v.056c-.015.426-.395 1.321-.409 1.321-.642 1.505-2.639 4.474-3.966 5.668 0 0-.341.336-.554.482A1.8 1.8 0 0 1 6.007 10c-.423 0-.817-.128-1.138-.37"
    />
  </Svg>
);
export default SvgArrowDown;
