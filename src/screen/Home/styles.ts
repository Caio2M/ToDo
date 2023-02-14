import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:theme.colors.gray600,
  },
  containerSuperior: {
    backgroundColor:theme.colors.gray700,
    height: 173,
    minHeight: 173,
    justifyContent: 'center',
    alignItems: "center"  
  
  },
  containerTasks: {
    width: '85%',
    marginTop: 60,
    alignSelf: "center",
  },
  containerTasksCounter: {
    maxHeight: 22,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom:20
  },
  imageLogo: {
    width: 111,
    height: 32,
    alignSelf: "center",
    marginRight: 10,
    marginTop: 5
  },
  containerCounter:{
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 22   
  },
  counter: {
    marginLeft:10,
    fontSize: 14,
    lineHeight: 20,
    backgroundColor: theme.colors.gray400,
    color: theme.colors.gray100,
    paddingTop:1,
    paddingBottom:1,
    paddingLeft:10,
    paddingRight:10,
    borderRadius: 10,
  },
  containerAddBar: {
    flexDirection: "row",
    justifyContent: "center",
    position: 'absolute',
    bottom: -30,
    right: 0,
    left: 0,
  },
  button: {
    backgroundColor: theme.colors.blueDark,
    width: 60,
    height: 60,
    marginLeft: 5,
    borderRadius:5,   
    alignItems:"center",
    justifyContent: "center",
  },
  buttonText: {
    color: theme.colors.gray100,
    fontSize: 20,
  },

  input: {
    backgroundColor: theme.colors.gray500,
    paddingLeft: 20,
    color: theme.colors.white,
    borderStyle: "solid",
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 5,
    width:'70%',
    height: 60,
  },

});