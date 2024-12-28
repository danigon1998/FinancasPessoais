import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, Modal } from "react-native";
import { Background, Area, Title, List } from "./styles";
import api from "../../services/api";
import { useIsFocused } from "@react-navigation/native";
import Header from "../../components/Header";
import { format } from "date-fns";
import BalanceItem from "../../components/BalanceItem";
import Icon from "react-native-vector-icons/MaterialIcons";
import HistoricoList, { HistoricoListProps } from "../../components/HistoricoList";
import CalendarModal from "../../components/CalendarModal";

interface BalanceProps {
  tag: string;
  saldo: number;
}

interface MovementProps {
  id: string;
  description: string;
  type: string;
  value: number;
  date: string;
}

export default function Home() {
  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState<BalanceProps[]>([]);
  const [movements, setMovements] = useState<MovementProps[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [dateMovements, setDateMovements] = useState(new Date());

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      let date = new Date(dateMovements);
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
      let dateFormatted = format(onlyDate, "dd/MM/yyyy");

      const receives = await api.get("/receives", {
        params: { date: dateFormatted },
      });

      const response = await api.get<BalanceProps[]>("/balance", {
        params: { date: dateFormatted },
      });

      if (isActive) {
        setListBalance(response.data);
        setMovements(receives.data);
      }
    }

    getMovements();

    return () => {
      isActive = false;
    };
  }, [isFocused, dateMovements]);

  async function handleDelete(id:string) {
    try {
      await api.delete(`/receives/delete`,
        {
          params: { item_id: id },
        }
      );
      setDateMovements(new Date());
    } catch (error) {
      console.log(error);
    }
  }

  function filterDatesMovements(dateSelected:Date){
    setDateMovements(dateSelected);
  }

  return (
    <Background>
      <Header title="Minhas Movimentações" />
      <FlatList
        style={{maxHeight:190}}
        data={listBalance}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.tag}
        renderItem={({ item }: { item: BalanceProps }) => (
          <BalanceItem tag={ item.tag } saldo={item.saldo}/>
        )}
      />

        <Area>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Icon
            name="event"
            color={"#121212"}
            size={30}
            />
          </TouchableOpacity>
          <Title>Ultimas Movimentações</Title>
        </Area>

        <FlatList
        data={movements}
        keyExtractor={(item) => item.id}
        renderItem={({item})=><HistoricoList data={item} deleteItem={handleDelete}/>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
        style= {{flex:1, backgroundColor: "#fff"}}
        />

        <Modal visible={modalVisible} animationType="fade" transparent={true}>
          <CalendarModal
          setVisible={()=> setModalVisible(false)}
          handleFilter={filterDatesMovements}
          />
        </Modal>

    </Background>
  );
}
