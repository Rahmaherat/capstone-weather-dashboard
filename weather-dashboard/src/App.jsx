// App.js

import React from "react";
import { View, StyleSheet, Text } from "react-native";

// Importing specific Heroicons from different styles
import { SparklesIcon as SparklesIconMicro } from "react-native-heroicons/micro";
import { SparklesIcon as SparklesIconMini } from "react-native-heroicons/mini";
import { SparklesIcon } from "react-native-heroicons/solid";
import { SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";

// Importing the entire solid icon pack
import * as Icons from "react-native-heroicons/solid";

// Importing all progress components from react-native-progress
import * as Progress from "react-native-progress";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heroicons & Progress Indicators</Text>

      {/* Heroicons */}
      <Text style={styles.iconTitle}>Heroicons:</Text>
      
      {/* Render individual icons */}
      <Text style={styles.subTitle}>Micro Icon:</Text>
      <SparklesIconMicro style={styles.icon} />
      
      <Text style={styles.subTitle}>Mini Icon:</Text>
      <SparklesIconMini style={styles.icon} />
      
      <Text style={styles.subTitle}>Solid Icon:</Text>
      <SparklesIcon style={styles.icon} />

      <Text style={styles.subTitle}>Outline Icon:</Text>
      <SparklesIconOutline style={styles.icon} />

      {/* Render an icon from the entire icon pack (solid style) */}
      <Text style={styles.subTitle}>Sparkles Icon from Entire Pack:</Text>
      <Icons.SparklesIcon style={styles.icon} />

      {/* Customized Icon with size, color, and fill */}
      <Text style={styles.subTitle}>Customized Outline Icon:</Text>
      <SparklesIconOutline color="red" fill="black" size={42} style={styles.icon} />

      {/* Progress Indicators */}
      <Text style={styles.title}>Progress Indicators:</Text>

      {/* Progress Bar */}
      <Text style={styles.subTitle}>Progress Bar:</Text>
      <Progress.Bar progress={0.3} width={200} />

      {/* Pie Progress */}
      <Text style={styles.subTitle}>Progress Pie:</Text>
      <Progress.Pie progress={0.4} size={50} />

      {/* Circle Progress */}
      <Text style={styles.subTitle}>Indeterminate Circle:</Text>
      <Progress.Circle size={30} indeterminate={true} />

      {/* Circle Snail */}
      <Text style={styles.subTitle}>Circle Snail (multi-color):</Text>
      <Progress.CircleSnail color={["red", "green", "blue"]} />
    </View>
  );
};

// Define styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Light background color
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
  },
  iconTitle: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold",
  },
  icon: {
    marginTop: 10,
    marginBottom: 20,
  },
});

export default App;

