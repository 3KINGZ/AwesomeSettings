import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import getStyles from "../utils/getStyles";
import settingsData from "../utils/data";
import defaultStyles from "../config/styles";
import colors from "../config/colors";

export const Item = ({ item, onPress, value }) => {
  const { title, control } = item;

  return (
    <View style={[styles.container, styles[getStyles(settingsData, title)]]}>
      <Text style={styles.textDM}>{title}</Text>
      {control == "dropdown" ? (
        <Icon
          style={{ paddingRight: 16 }}
          name="right"
          color={colors.iconColor}
          size={18}
        />
      ) : (
        <Switch onValueChange={onPress} value={value} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  single: {
    ...defaultStyles.sectionContainer,
    borderRadius: 10,
  },
  first: {
    ...defaultStyles.sectionContainer,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  middle: {
    ...defaultStyles.sectionContainer,
  },
  last: {
    ...defaultStyles.sectionContainer,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textDM: {
    color: colors.textColorDM,
    fontWeight: "bold",
  },
});
