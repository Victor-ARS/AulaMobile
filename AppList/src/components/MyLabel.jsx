import { StyleSheet, Text } from "react-native"

//const MyLabel = ( props ) =>{
const MyLabel = ( {titulo, tamanho, cor} ) =>{
    console.log("MyLabel :: ",props)
    //const {titulo, tamanho, cor} = props
    console.log(titulo)
 
    return(
        <Text style={
            {
                fontSize: tamanho,
                color: cor? cor : "#00ff00"
            }} > 
            { titulo } 
        </Text>
    )
}

const styles = StyleSheet.create({

})

export default MyLabel