import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Background } from "./styles";
import api from "../../services/api";
import { useIsFocused } from "@react-navigation/native";
import Header from "../../components/Header";
import { format } from "date-fns";
import BalanceItem from "../../components/BalanceItem";

interface BalanceProps {
  tag: string;
  saldo: number;
}

export default function Home() {
  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState<BalanceProps[]>([]);
  const [dateMovements, setDateMovements] = useState(new Date());

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      const dateFormatted = format(dateMovements, "dd/MM/yyyy");

      const response = await api.get<BalanceProps[]>("/balance", {
        params: { date: dateFormatted },
      });

      if (isActive) {
        setListBalance(response.data);
      }
    }

    getMovements();

    return () => {
      isActive = false;
    };
  }, [isFocused]);

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
    </Background>
  );
}
