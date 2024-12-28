import React, {useState} from "react";
import { Modal, TouchableWithoutFeedback, View } from "react-native";
import { Container, ButtonFilterText, ModalContent, ButtonFilter } from "./styles";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "date-fns/locale";

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

interface Props {
    setVisible: (value: boolean) => void,
    handleFilter: (date: Date) => void
}

export default function CalendarModal({setVisible, handleFilter}:Props){
    const [dateNow, setDateNow] = useState(new Date());
    const [markedDates, setMarkedDates] = useState({});
    
    function handleOnDayPress(date:any){
        setDateNow(new Date(date.dateString));

        const markedDay: Record<string, { selected: boolean; color: string, textColor: string }> = {};

        markedDay[date.dateString] = {selected: true, color: '#00adf5', textColor: "#FFF"}

        setMarkedDates(markedDay);
    }

    function handleFilterDay(){
        handleFilter(dateNow);
        setVisible(false);
    }

    return(
        <Container>
            <TouchableWithoutFeedback onPress={() => setVisible}>
                <View style={{flex:1}}></View>
            </TouchableWithoutFeedback>
            <ModalContent>

                <Calendar
                onDayPress={handleOnDayPress}
                markedDates={markedDates}
                enableSwipeMonths={true}
                theme={{
                    todayTextColor:'#FF0000',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                }}
                />

                <ButtonFilter onPress={handleFilterDay}>
                    <ButtonFilterText>Filtrar</ButtonFilterText>
                </ButtonFilter>
            </ModalContent>
        </Container>
    )
}