import {
  Keyboard,
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
  useWindowDimensions,
  RefreshControl,
} from "react-native";
import { styles } from "./styles";
import Logoimg from "../../../assets/Logopng2.png";
import { Tasks } from "../../components/Tasks";
import theme from "../../global/styles/theme";
import { useState } from "react";
import { listEmpty } from "../../components/ListEmpty";
import { Ionicons } from "@expo/vector-icons";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";

interface activitiesProps {
  id: string;
  activity: string;
  stateCompleted: boolean;
}

export function Home() {
  const [activities, setActivities] = useState<activitiesProps[]>([
    { activity: "ir a escola", id: "1", stateCompleted: false },
  ]);
  const [task, setTask] = useState("");
  // const [completed, setCompleted] = useState(false);
  const [color, setColor] = useState(theme.colors.gray700);
  const completeds = activities.filter(
    (activity) => activity.stateCompleted === true
  );
  // const [numberCompleteds, setNumberCompleteds] = useState(completeds.length);
  const numberCompleteds = completeds.length;

  //--- FUNÇÃO DE TROCAR A BORDA
  function changeBorder() {
    setColor(theme.colors.purple);
  }

  //--- FUNÇÃO DE FAZER A BORDAR VOLTAR A COR ORIGINAL
  function normalBorder() {
    setColor(theme.colors.gray700);
  }

  //--- FUNÇÃO DE ADICIONAR AO CONTADOR DE CONCLUIDAS
  function addCounter(id: string) {
    // setNumberCompleteds(numberCompleteds + 1);
    // const changeState = activities.map((act) => {
    //   if (id === act.id) {
    //     return {
    //       ...act,
    //       stateCompleted: !act.stateCompleted,
    //     };
    //   }
    //   return act;
    // });
    // const estado = activities.filter((acharAtividadePeloId) => {
    //   const estadoAtual = acharAtividadePeloId.stateCompleted;
    //   if (id === acharAtividadePeloId.id) {
    //     acharAtividadePeloId.stateCompleted = !estadoAtual;
    //   }
    //   return acharAtividadePeloId;
    // });
    // console.log(estado);
  }

  //--- FUNÇÃO DE ADICIONAR TAREFA
  function addTask() {
    if (task.charAt(0) === " " || task === "") {
      setColor(theme.colors.danger);
      console.error(
        `Campo incorreto: O campo não pode estar vazio nem começar com espaço`
      );
    } else {
      setColor(theme.colors.purpleDark);
      handleTaskAdd();
    }
  }

  function handleTaskAdd() {
    setActivities((prevState) => [
      ...prevState,
      {
        activity: task,
        id: new Date().getTime().toString(),
        stateCompleted: false,
      },
    ]);
    setTask("");
    Keyboard.dismiss();
  }

  function handleActivityRemove(id: string) {
    Alert.alert("Remover", `Deseja remover a tarefa?`, [
      {
        text: "Sim",
        onPress: () =>
          setActivities((prevState) =>
            prevState.filter((activity) => activity.id !== id)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  const completed = activities.filter((item) => item.stateCompleted === true);

  return (
    <View style={styles.container}>
      <View style={styles.containerSuperior}>
        <Image style={styles.imageLogo} source={Logoimg} />
        <View style={styles.containerAddBar}>
          <TextInput
            onFocus={() => changeBorder()}
            onBlur={() => normalBorder()}
            onChangeText={(text) => setTask(text)}
            style={[styles.input, { borderColor: color }]}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={theme.colors.gray300}
            selectionColor={theme.colors.gray100}
            value={task}
          />
          <TouchableOpacity style={styles.button} onPress={addTask}>
            <Text style={styles.buttonText}>
              <Ionicons name="add-circle-outline" size={24} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerTasks}>
        <View style={styles.containerTasksCounter}>
          <View style={styles.containerCounter}>
            <Text style={[styles.text, { color: theme.colors.blue }]}>
              Criadas
            </Text>
            <Text style={styles.counter}>{activities.length}</Text>
          </View>
          <View style={styles.containerCounter}>
            <Text style={[styles.text, { color: theme.colors.purple }]}>
              Concluídas
            </Text>
            <Text style={styles.counter}>{numberCompleteds}</Text>
          </View>
        </View>
        <FlatList
          style={{ marginBottom: 220 }}
          data={activities}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Tasks
              id={item.id}
              task={item.activity}
              onRemove={handleActivityRemove}
              onFinished={() => addCounter(item.id)}
              stateCompleted={item.stateCompleted}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={listEmpty}
        />
      </View>
    </View>
    // <FlatList
    //   data={activities}
    //   keyExtractor={(item) => item.id}
    //   renderItem={({ item }) => (
    //     <Tasks
    //       id={item.id}
    //       task={item.activity}
    //       onRemove={handleActivityRemove}
    //     />
    //   )}
    //   showsVerticalScrollIndicator={false}
    //   ListEmptyComponent={listEmpty}
    // />
  );
}
