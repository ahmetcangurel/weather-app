import React from "react";
import { View, Text } from "react-native";

// Styles
import styles from "./SummaryContent.Style";

const SummaryContent = () => {
  const RenderItem = ({ icon, title, subtitle }: any) => {
    return (
      <View style={styles.renderItemContainer}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.renderItemTitle}>{title}</Text>
        <Text style={styles.renderItemSubtitle}>{subtitle}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Title</Text>
        <Text style={styles.headerText}>Oct, 10</Text>
      </View>
      <View style={styles.section}>
        <RenderItem icon="icon" title="Title" subtitle="Subtitle" />
        <RenderItem icon="icon" title="Title" subtitle="Subtitle" />
        <RenderItem icon="icon" title="Title" subtitle="Subtitle" />
      </View>
      <View style={styles.section}>
        <RenderItem icon="icon" title="Title" subtitle="Subtitle" />
        <RenderItem icon="icon" title="Title" subtitle="Subtitle" />
        <RenderItem icon="icon" title="Title" subtitle="Subtitle" />
      </View>
    </View>
  );
};

export default SummaryContent;
