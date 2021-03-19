import React, { useState } from "react";
import { View, Text, SectionList, StatusBar, StyleSheet } from "react-native";

import settingsData from "./src/utils/data";
import { Item, Title } from "./src/components";
import colors from "./src/config/colors";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={darkMode ? styles.containerDM : styles.container}>
      <Text style={darkMode ? styles.titleDM : styles.title}>Settings</Text>

      <SectionList
        style={styles.section}
        keyExtractor={(item) => item.id}
        sections={settingsData}
        renderSectionHeader={({ section }) => (
          <Title darkMode={darkMode} data={section} />
        )}
        renderItem={({ item }) => (
          <Item
            onPress={item.title == "Dark Mode" ? setDarkMode : null}
            value={darkMode}
            key={item.id}
            item={item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 5,
    backgroundColor: colors.white,
    flex: 1,
  },
  containerDM: {
    paddingVertical: 30,
    paddingHorizontal: 5,
    backgroundColor: colors.dark,
    flex: 1,
  },
  section: {
    marginTop: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.dark,
  },
  titleDM: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.white,
  },
});

export default App;
