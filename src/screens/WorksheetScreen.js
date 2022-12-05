import React from 'react';
import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WorksheetScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text variant={"displayMedium"}>
        Munkalapok!
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default WorksheetScreen;
