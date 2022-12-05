import { TouchableOpacity, View } from "react-native";

const ScanNavigationButton = ({children, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',

    }}
  >
    <View style={{
      width: 65,
      height: 65,
      borderRadius: 60,
      borderStyle: 'solid',
      borderColor: '#ffffff',
      borderWidth: 3,
      backgroundColor: '#ED1C24',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 1,
      elevation: 7,
      shadowRadius: 10.00,
    }}>
      {children}
    </View>
  </TouchableOpacity>
)

export default ScanNavigationButton;
