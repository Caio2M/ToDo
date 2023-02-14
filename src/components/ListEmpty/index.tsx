import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import theme from "../../global/styles/theme";
import listImg from "../../../assets/Clipboard.png";

export function listEmpty() {
  return (
    <View style={styles.containerListEmpty}>
      <Image style={styles.imageList} source={listImg} />
      <Text style={[styles.text, { color: theme.colors.gray300 }]}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={[{ color: theme.colors.gray300 }, {fontSize: 15.5}]}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
