import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      numero: 0,
      botao: 'START',
      ultimo: null,
    }

    //Variável do timer do relogio, começa sem valor
    this.tempo = null;

    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){
    if(this.tempo != null){ //se o tempo for diferente de 0 ele irá parar
      //aqui vai parar o tempo
      clearInterval(this.tempo);  //pausa
      this.tempo = null;  //volta o tempo
      this.setState({  //quando parar volta a ser START
        botao: 'START'})
    }else{
      //o tempo que é nulo receberá um numero mais 0.1, então se o tempo estiver nulo ele irá começar a rodar
      this.tempo = setInterval( () => {
        this.setState({numero: this.state.numero + 0.1})
      },100 );

      this.setState({ botao: 'STOP' })  //quando estiver rodando aparece STOP
    }
  }

  limpar(){
    if(this.tempo !== null){ //irá zerar o tempo que já esta rodando
      clearInterval(this.tempo);
      this.tempo = null
    }
    this.setState({  //irá zerar o tempo que já esta parado
      ultimo: this.state.numero,
      numero: 0,
      botao: 'START'
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Image
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />

        <Text style={styles.timer}>{ this.state.numero.toFixed(1) }</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={ this.vai }>
            <Text style={styles.btnTexto}>{ this.state.botao }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={ this.limpar }>
            <Text style={styles.btnTexto}>CLEAR</Text>
          </TouchableOpacity>          
        </View>
        <View style={styles.areaUltimo}>
          <Text style={styles.btnUltimo}>Último tempo: {this.state.ultimo}</Text>
          {/* fixando o valor em duas casas decimais  */}
          {/* {this.state.ultimo > 0 ? 'Ultimo temo: ' + this.state.ultimo.toFixed(2) + 's' : ''} */}
        </View>
      </View>
    )
  }
}

export default App;