import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(
    {
      logradouro: '',
      complemento: '',
      unidade: '',
      bairro: '',
      localidade: '',
      estado: '',
      regian: '',
      ibge: '',
      gia: '',
      siafi: '',
    }
  );

  async function buscarCEP(){
    let r  = await fetch("https://viacep.com.br/ws/"+cep+"/json/");
    let dados = await r .json();
    setEndereco(dados);
  }
  return (
    <View style={styles.container}>
      <Text>Consulte seu cep</Text>
      <TextInput 
      style={styles.textinput}
      value={cep}
      onChangeText={setCep}/>
      <Text>{cep}</Text>
      <Button title = 'Buscar' onPress= {buscarCEP}/>
      <Text>{endereco.logradouro}</Text>
      <Text> Complemento: (endereco.complemento)</Text>
      <Text> Unidade: (endereco.unidade)</Text>
      <Text> Bairro: (endereco. bairro)</Text>
      <Text> Localidade:(endereco.localidade)</Text>
      <Text> UF: (endereco.uf)</Text>
      <Text> Estado: (endereco.estado)</Text>
      <Text> Região: (endereco.regiao)</Text>
      <Text> IBGE: (end.ibge)</Text>
      <Text> GIA: (endereco.gia)</Text>
      <Text> DDD: (endereco.ddd)</Text>
      <Text> SIAFI: (endereco.siafi)</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textinput:{
    borderWidth: 1,
    color: 'red',
  }
});
