import React from "react";
import { Container, TipoText, Tipo, IconView, ValorText } from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { TouchableWithoutFeedback, Alert } from "react-native";

export interface HistoricoListProps{
    data: {
        id: string;
        type: string;
        value: number;
    }
    deleteItem: (id:string) => void
}

export default function HistoricoList({data, deleteItem}:HistoricoListProps){

    function handleDeleteItem(){
        Alert.alert('Atenção',
            `Deseja realmente excluir o item?`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Excluir',
                    onPress: () => deleteItem(data.id)
                }
            ]
        )
    }

    return(
        <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
            <Container>
                <Tipo>
                    <IconView tipo={data.type}>
                        <Icon name={data.type === 'receita'? "arrow-up" : "arrow-down"} color="#FFF" size={20} />
                        <TipoText>{data.type}</TipoText>
                    </IconView>
                </Tipo>

                <ValorText>R$ {data.value}</ValorText>

            </Container>
        </TouchableWithoutFeedback>
    )
}