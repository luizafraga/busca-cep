import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

type _endereco = {
    cep: string,
    logradouro: string,
    complemento: string,
    unidade: string,
    bairro: string,
    localidade: string,
    uf: string;
    estado: string,
    regiao: string,
    ibge: string,
    ddd:string,
    gia: string,
    siafi: string
  }

export default function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState<_endereco>();
  const [erro, setErro] = useState(false);

  async function buscarCEP(){
    try{
      let r = await fetch("https://viacep.com.br/ws/"+cep+"/json/");
      let dados = await r.json();
      setErro(false);
      setEndereco(dados);
    }catch(e){
      setErro(true);
    }
  }

  function mostrarEnd() {
    if(erro)
      return <Text> Sem resultados</Text>
    return <>
      <Text> Cep: {endereco?.cep}</Text>
      <Text> Logradouro: {endereco?.logradouro}</Text>
      <Text> Complemento: {endereco?.complemento}</Text>
      <Text> Unidade: {endereco?.unidade}</Text>
      <Text> Bairro: {endereco?. bairro}</Text>
      <Text> Localidade:{endereco?.localidade}</Text>
      <Text> UF: {endereco?.uf}</Text>
      <Text> Estado: {endereco?.estado}</Text>
      <Text> Região: {endereco?.regiao}</Text>
      <Text> IBGE: {endereco?.ibge}</Text>
      <Text> GIA: {endereco?.gia}</Text>
      <Text> DDD: {endereco?.ddd}</Text>
      <Text> SIAFI: {endereco?.siafi}</Text>
      <StatusBar style="auto"/>
      </>
  }

  return (
    <View style={styles.container}>
      <Text>Consulte seu CEP</Text>
      <TextInput
      style={styles.textinput}
      value={cep}
      onChangeText={setCep}
      />
      <Text>{cep}</Text>
      <Button title='Buscar'
      onPress={buscarCEP}
      />
      {mostrarEnd()}
      <StatusBar style="auto" />
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
