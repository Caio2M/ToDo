import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({

imageList: {
  width: 56,
  height: 56,
  marginBottom: 20
},
containerListEmpty: {
  alignItems: "center",
  paddingTop: 50,
  borderTopColor: theme.colors.gray400,
  borderTopWidth: 1,
},
text: {
  fontSize: 16,
  fontWeight: "bold",
  lineHeight: 22   
},
})