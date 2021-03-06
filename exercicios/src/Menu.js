import React from 'react'
import { createDrawerNavigator} from 'react-navigation'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import { TextoSincronizado } from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'

export default createDrawerNavigator({
    Flex: {
        screen: () => <Flex/>
    },
    ListaFlex: {
        screen: () => <ListaFlex/>
    },
    TextoSincronizado:{
        screen: () => <TextoSincronizado/>
    },
    Avo: {
        screen: () => <Avo nome='Cabral' sobrenome='Junqueira'/>
    },
    Evento: {
        screen: () => <Evento/>
    },
    ValidarProps: {
        screen: () => <ValidarProps label="Ano: " ano={19}/>
    },
    Plataformas: {
        screen: () => <Plataformas/>
    },
    Contador: {
        screen: () => <Contador numeroInicial = {14}/>
    },
    MegaSena:{
        screen: () => <MegaSena numeros={8} />        
    },
    Inverter: {
        screen: () => <Inverter texto="React Native!"/>        
    },
    ParImpar: {
        screen: () => <ParImpar numero={33}/>
    },
    Simples: {
        screen: () => <Simples texto="Flexível"/>        
    }
})