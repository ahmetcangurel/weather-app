import React, { FC, useCallback, useEffect, useRef } from "react";
import {
  View,
  Animated,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

// Styles
import styles from "./ModalView.Style";

// Icons
import SvgArrowDown from "../icons/ArrowDown";
import SvgArrowUp from "../icons/ArrowUp";

interface ModelViewProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: JSX.Element;
}

const ModalView: FC<ModelViewProps> = ({ isOpen, setIsOpen, children }) => {
  const ICON_SIZE = 12;
  const animHeight = useRef(new Animated.Value(-520)).current;

  const handleOpen = useCallback(() => {
    Animated.timing(animHeight, {
      toValue: -75,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [animHeight]);

  const handleClose = useCallback(() => {
    Animated.timing(animHeight, {
      toValue: -520,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [animHeight]);

  useEffect(() => {
    if (isOpen) {
      handleOpen();
    } else {
      handleClose();
    }
  }, [isOpen]);

  return (
    <Animated.View
      style={{
        ...styles.container,
        bottom: animHeight,
      }}
    >
      <ImageBackground
        style={styles.container}
        source={require("../../../assets/bsBackground.png")}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            setIsOpen(!isOpen);
          }}
        >
          <ImageBackground
            source={require("../../../assets/bsButtonCircle.png")}
            style={styles.buttonContainer}
          >
            {isOpen ? (
              <SvgArrowDown width={ICON_SIZE} height={ICON_SIZE} />
            ) : (
              <SvgArrowUp width={ICON_SIZE} height={ICON_SIZE} />
            )}
          </ImageBackground>
        </TouchableOpacity>
        <View style={styles.contentContainer}>{children}</View>
      </ImageBackground>
    </Animated.View>
  );
};

export default ModalView;
