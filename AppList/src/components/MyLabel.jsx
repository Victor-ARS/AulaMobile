import { StyleSheet, Text } from "react-native"

const MyLabel = ( props ) =>{

    return(
        <Text style={
            {
                fontSize: props.tamanho,
                color: props.cor

            }} > 
            { props.titulo } 
        </Text>
    )
}

const styles = StyleSheet.create({

})

export default MyLabel