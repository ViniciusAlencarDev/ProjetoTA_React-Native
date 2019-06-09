import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const BoxLogin = styled.View`
    width: 90%;
    height: 300px;
    background: #f1f1f1;
    margin: 0px 10px;
    display: flex;
    border: none;
    border-radius: 10px;
    padding: 20px;
    justify-content: center;
    align-items: center;
`

export const cadastro = styled.View`
    width: 200px;
    height: 300px;
`

export const TitleLogin = styled.Text`
    color: purple;
    font-size: 30px;
    margin-bottom: 30px;
    font-style: italic;
`

export const InputText = styled.TextInput`
    width: 100%;
    height: 45px;
    background: white;
    border-radius: 20px;
    margin-bottom: 6px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
`

export const InputPassword = InputText

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    background: purple;
    margin-top: 20px;
    padding: 15px;
    justify-content: center;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    opacity: 0.8
`

export const ButtonText = styled.Text`
    color: #FFF
`
