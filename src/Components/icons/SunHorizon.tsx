import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSunHorizon = (props: SvgProps) => (
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
      d="M7.003 2.99c.3-.125.644.017.769.317l.566 1.36a.588.588 0 0 1-1.086.451l-.566-1.36a.59.59 0 0 1 .317-.768M2.232 7.76a.59.59 0 0 1 .77-.317l1.359.566a.588.588 0 0 1-.452 1.086l-1.36-.566a.59.59 0 0 1-.317-.769M18.53 7.76a.59.59 0 0 1-.316.77l-1.36.565a.588.588 0 1 1-.452-1.086l1.36-.566c.3-.124.644.018.769.317M13.76 2.99c.3.125.442.469.317.769l-.566 1.36a.588.588 0 1 1-1.085-.453l.566-1.36a.59.59 0 0 1 .768-.316M1.563 12.315c0-.325.263-.588.588-.588h16.462a.588.588 0 1 1 0 1.176H2.15a.59.59 0 0 1-.588-.588M3.914 15.255c0-.325.264-.588.588-.588h11.759a.588.588 0 0 1 0 1.175H4.502a.59.59 0 0 1-.588-.587"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M10.382 7.31A3.822 3.822 0 0 0 6.7 12.157a.588.588 0 1 1-1.133.316 4.998 4.998 0 1 1 9.629 0 .588.588 0 1 1-1.133-.316 3.822 3.822 0 0 0-3.681-4.847"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSunHorizon;
