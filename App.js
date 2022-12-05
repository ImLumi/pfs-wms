import ScanScreen from "./src/screens/ScanScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { BottomNavigation } from "react-native-paper";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react";
import WorksheetScreen from "./src/screens/WorksheetScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/navigation/Tabs";


export default function App() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'worksheet', title: 'munkalapok', focusedIcon: 'folder', unfocusedIcon: 'folder-outline' },
    {
      key: 'scan',
      title: 'scan',
      focusedIcon: "barcode",
      unfocusedIcon: (props) => <Ionicons {...props} name="barcode-outline"/>
    },
    {
      key: 'itemList',
      title: 'Alkatrészek',
      focusedIcon: (props) => <MaterialCommunityIcons name="package-variant" {...props} size={props.size + 2}/>,
      unfocusedIcon: (props) => <MaterialCommunityIcons name="package-variant-closed" {...props} />
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    worksheet: WorksheetScreen,
    itemList: HomeScreen,
    scan: ScanScreen,
  });

  // return (
  //   <SafeAreaProvider>
  //     <BottomNavigation
  //       navigationState={{ index, routes }}
  //       onIndexChange={setIndex}
  //       renderScene={renderScene}
  //     />
  //   </SafeAreaProvider>
  // );
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
