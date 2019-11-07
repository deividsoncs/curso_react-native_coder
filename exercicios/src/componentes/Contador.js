import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
    }

    // constructor(props) {
    //     super(props)

    //     this.maisUm = this.maisUm.bind(this) //torna o 'this' acessível dentro da função maisUm caso ela não seja uma função Arrow
    //     this.limpar = this.limpar.bind(this)
    // }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1})
    }

    limpar = () => {
        this.setState({ numero: 0})
    }

    render() {
        return (
            <View>                
                <Text style={Padrao.ex} > {this.state.numero} </Text>
                <TouchableHighlight
                    onPress={this.maisUm}   
                    onLongPress={this.limpar} 
                >  
                    <Text>Incrementar/Zerar</Text>                  
                </TouchableHighlight>
            </View>
        )
    }
}