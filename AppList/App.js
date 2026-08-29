import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import MyLabel from './src/components/MyLabel';
import DataTable from './src/components/DataTable';
import alunos from './src/data/data';

export default function App() {


  const fnt = ()=>{
    Alert("oi")
  }

  return (
    <View style={styles.container}>
      <Text>Aula Mobile</Text>
      {/* <Button style={styles.btn} 
      onPress={fnt} >Click</Button> */}

        <MyLabel titulo="2026/2"/>
        
        <MyLabel titulo="Daves Martins" 
                  tamanho={32} cor="#0F2"/>


        {/* <MyLabel titulo="Bons Estudos" 
                  tamanho={8}/> */}

        <DataTable titulo="alunos" alunos={alunos} />          
       

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
