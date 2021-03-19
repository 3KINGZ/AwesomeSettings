import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import defaultStyles from "../config/styles";
import colors from "../config/colors";

export const Title = ({ data, darkMode }) => {
  const { title, icon } = data;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={20} />
      </View>
      <Text style={darkMode ? styles.sectionTitleDM : styles.sectionTitle}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "700",
    paddingVertical: 20,
  },
  iconContainer: {
    width: 35,
    height: 35,
    backgroundColor: colors.orange,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  sectionTitle: {
    ...defaultStyles.sectionTitle,
    color: colors.dark,
  },
  sectionTitleDM: {
    ...defaultStyles.sectionTitle,
    color: colors.white,
  },
});
