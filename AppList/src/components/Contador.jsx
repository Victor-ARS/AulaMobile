import { useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"


const Contador = ( {titulo, mensagem} )=>{

    const clickButton = ()=>{
        titulo = titulo + "(clicado!!!)"
        setUsMessage( usMessage + "(1)" )
        setVisivel(false)

        console.log(titulo, usMessage)
    }
    const [usMessage, setUsMessage] = useState(mensagem)
    const [visivel, setVisivel] = useState(true)
    const [cont, setCont] = useState(0)
    const [step, setStep] = useState(1)

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>{titulo}</Text>
            <Text style={styles.texto}>{usMessage}</Text>

            { visivel &&
                <Pressable style={styles.botao} 
                onPress={clickButton}>
                    <Text style={styles.texto}>OK</Text>
                </Pressable>
            }
            <View style={styles.container2}>
                 <Pressable style={styles.botao} 
                 onPress={ ()=> setCont( cont-parseInt(step)  ) }
                >
                    <Text style={styles.texto}>-</Text>
                </Pressable>

                <TextInput style={{
                    width: 50,
                    fontSize: 28,
                    fontWeight: 'bold',
                    textAlign: 'center',
                }} 
                value={cont}
                />

                 <Pressable style={styles.botao} 
                 onPress={ ()=> setCont( cont+parseInt(step)  ) }
                >
                    <Text style={styles.texto}>+</Text>
                </Pressable>

            </View>
            <Text>Step:</Text>
            <TextInput style={{
                    width: 50,
                    fontSize: 28,
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}
                onChange={ (e)=> setStep( e.target.value ) }
            value={step} />

            

        </View>
    )

}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f4f7fb',
  },
container2: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    // padding: 24,
    backgroundColor: '#f9be29ff',
    // height: 25,
    // width: 50,
  },
  botao: {
    marginLeft: 12,
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderRadius: 12,
    backgroundColor: '#4f46e5',
  },
  texto:{
    fontSize: 22,
    padding: 20,
  }
})

export default Contador