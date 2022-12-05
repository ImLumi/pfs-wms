import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import WorksheetScreen from "../screens/WorksheetScreen";
import ScanScreen from "../screens/ScanScreen";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScanNavigationButton from "../components/ScanNavigationButton";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "react-native-paper";

const Tab = createBottomTabNavigator();

const Tabs = () => {

  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        height: 55,
      },
      tabBarLabelStyle: {
        top: -5,
        fontSize: 13,
      },
    }}
    >
      <Tab.Screen name="Munkalapok" options={{
        tabBarIcon: ({ focused }) => (focused ? <MaterialCommunityIcons name="folder" size={26}/> :
          <MaterialCommunityIcons name="folder-outline" size={26}/>)
      }} component={WorksheetScreen}/>
      <Tab.Screen name="scan" component={ScanScreen}
                  options={{
                    title: 'Scan',
                    tabBarIcon: () => (<MaterialCommunityIcons name="barcode-scan" size={35} style={{
                      color: '#ffffff'
                    }}/>),
                    tabBarButton: (props) => <ScanNavigationButton {...props}/>,
                    tabBarLabel: () => null,
                  }}/>
      <Tab.Screen name="Alkatrészek" options={{
        tabBarIcon: ({ focused }) => (focused ? <MaterialCommunityIcons name="package-variant" size={26}/> :
          <MaterialCommunityIcons name="package-variant-closed" size={26}/>)
      }} component={HomeScreen}/>
    </Tab.Navigator>
  )

};

export default Tabs;
