import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import theme from "../../global/styles/theme";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type Props = {
  task: string;
  id: string;
  onRemove: (id: string) => void;
  onFinished: (id: string) => void;
  stateCompleted: boolean;
};

export function Tasks({
  task,
  onRemove,
  id,
  onFinished,
  stateCompleted,
}: Props) {
  const [textColor, setTextColor] = useState(theme.colors.gray100);

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        style={styles.checkBox}
        text={task}
        fillColor={theme.colors.blue}
        textStyle={{ color: textColor }}
        size={17}
        onPress={() => {
          if (stateCompleted === true) {
            setTextColor(theme.colors.gray300);
            onFinished(id);
          } else {
            setTextColor(theme.colors.gray100);
            onFinished(id);
          }
        }}
      />
      <TouchableOpacity style={styles.button} onPress={() => onRemove(id)}>
        <Feather name="trash-2" size={24} color={theme.colors.gray300} />
      </TouchableOpacity>
    </View>
  );
}
