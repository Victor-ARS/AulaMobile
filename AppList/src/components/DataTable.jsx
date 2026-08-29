import {Alert, Text, View} from "react-native"
import MyLabel from "./MyLabel"

const DataTable = ( p ) => {
    const lista = p.alunos

    const nomeHandle = (alu) => {
        //new Alert("oi!")
        console.log(alu.nome)
    }

    return (
    <View>
        <MyLabel titulo={p.titulo} tamanho={30} cor={"#991100"}/>
        {
            (lista != null) && lista.map( a => <Text style={{fontSize: 28}} onPress={nomeHandle}> {a.nome} - Média {(a.nota1 + a.nota2) /2}</Text>)
        }
        {
            (lista == null) && <Text>Lista vazia!!!</Text>
        }
    </View>    
    )
}

export default DataTable