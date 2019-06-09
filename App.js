/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text,Alert} from 'react-native';

import { BoxLogin, Container, TitleLogin, InputText, InputPassword, Button, ButtonText } from './styles.js';
import LinearGradient from 'react-native-linear-gradient';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';
// import { create } from 'istanbul-reports';

type Props = {};
class Home extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null
    }
  }
  
  render() {
    return (
      <LinearGradient colors={["purple", "lightgray"]}>
        <Container>
          <BoxLogin>
            <TitleLogin>Faça seu Login</TitleLogin>
            <InputText value={this.state.username} onChangeText={text => { this.setState({ username: text }) }} placeholder="Usuário ou e-mail"></InputText>
            <InputPassword value={this.state.password} onChangeText={text => { this.setState({ password: text }) }} secureTextEntry placeholder="Senha"></InputPassword>
            <Button onPress={() => {
                if(this.state.username !== "vini" || this.state.password !== "1234") {
                  Alert.alert('Autenticação Inválida! Por favor tente novamente!');  
                  return;
                }
                this.props.navigation.navigate('Logged', { username: this.state.username });
              }}>
              <ButtonText>Entrar</ButtonText>
            </Button>
          </BoxLogin>
        </Container>
      </LinearGradient>
    );
  }
}

class Logged extends Component<Props> {
  
  render() {

    const params = this.props.navigation.state.params;
    
    return (
      <LinearGradient colors={["purple", "lightgray"]}>
        <Container>
          <Text>
            Bem vindo(a) {params.username}
          </Text>
          <Text style={{ color: '#FFF' }}>Iniciando...</Text>
        </Container>
      </LinearGradient>
    );
  }
}

const Routes = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
        headerTitle: 'Tela Principal'
      }
    },
    Logged: {
      screen: Logged,
      navigationOptions: {
        headerTitle: 'Logado'
      }
    }
  })
);

export default Routes
