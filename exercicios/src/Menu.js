import React from 'react'
import { createDrawerNavigator} from 'react-navigation'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'

export default createDrawerNavigator({
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