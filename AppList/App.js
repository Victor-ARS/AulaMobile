import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import MyLabel from './src/components/MyLabel';
import DataTable from './src/components/DataTable';
import alunos from './src/data/data';
import CardEventos from './src/components/CardEventos';
import Contador from './src/components/Contador';

export default function App() {


  const fnt = ()=>{
    Alert("oi")
  }

  return (
    <View style={styles.container}>

    <Contador titulo="Bem Vindo" mensagem="UseState" />

      {/* <CardEventos titulo="Aula de Mobile" 
      descricao="Venha para o maior evento mobile da região, vai ser sensacional!"
      imagem="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}

      {/* <Text>Aula Mobile</Text>
      {/* <Button style={styles.btn} 
      onPress={fnt} >Click</Button> */}

        {/* <MyLabel titulo="2026/2"/>
        
        <MyLabel titulo="Daves Martins" 
                  tamanho={32} cor="#0F2"/>


        <DataTable titulo="alunos" alunos={alunos} />          
        */}

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
  btn:{
    color: '#000',
    fontSize:12
  }
});
