import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width:'100%',
    backgroundColor: theme.colors.gray500,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: theme.colors.gray400,
    justifyContent: "space-between",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 10,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
 checkBox: { 
  width: "80%", 
  height: "100%", 
  paddingLeft: 15
  },
});