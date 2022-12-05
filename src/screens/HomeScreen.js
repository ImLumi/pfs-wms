import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="displayMedium">Hello Home page!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default HomeScreen;
