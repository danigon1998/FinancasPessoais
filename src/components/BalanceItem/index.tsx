import React, {useMemo} from "react";
import { Container, Label, Balance } from "./style";

interface BalanceProps {
    tag: string;
    saldo: number;
  }

export default function BalanceItem({tag,saldo}:BalanceProps){

    const labelName = useMemo(()=>{
        
        if(tag === 'saldo'){
            return {
                label: 'Saldo atual',
                color: '3b3dbf'
            }
        }else if(tag === 'receita'){
            return {
                label: 'Entradas de Hoje',
                color: '00b94a'
            }
        }else{
            return {
                label: 'Saídas de Hoje',
                color: 'ef463a'
            }
        }
    }, [tag,saldo])

    return(
        <Container bg={labelName.color}>
            <Label>{labelName.label}</Label>
            <Balance>R${saldo}</Balance>
        </Container>
    )
}