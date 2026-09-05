import { useState } from "react"
import { Alert, Button, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"


const CardEventos = ( {imagem, titulo, descricao} ) =>{

    let nome = "Zezin"

    const [eTitulo, setEtitulo] = useState(titulo)

    return(
        <View style={styles.card}>
            <Image style={styles.imagem} 
            source={{uri : imagem}} />

            <View style={styles.conteudo}>
                <View style={styles.selo}>
                    <Text style={styles.textoSelo}
                    >EVENTO</Text>
                </View>
            </View>
            <Text style={styles.titulo} >{eTitulo}</Text>

            <Text style={styles.descricao}>{descricao}</Text>

            <View style={styles.rodape}>
                {/* <Button>Mais Detalhes</Button> */}
                <TextInput style={styles.campo} 
                value={nome} />
                <Pressable style={styles.botao} 
                onPress={()=>{
                    console.log("oi")
                    setEtitulo("abc")
                    Alert.alert("Inscrição realizada com sucesso")}                    
                }                     
                >
                   <Text>Inscreva-se</Text> 
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f4f7fb',
  },
  cabecalho: {
    marginBottom: 14,
    color: '#172554',
    fontSize: 26,
    fontWeight: '700',
  },
  card: {
    overflow: 'hidden',
    borderRadius: 24,
    backgroundColor: '#ffffff',
    shadowColor: '#172554',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.16,
    shadowRadius: 18,
    elevation: 8,
  },
  imagem: {
    width: '100%',
    height: 190,
  },
  conteudo: {
    padding: 20,
  },
  selo: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    backgroundColor: '#e0e7ff',
  },
  textoSelo: {
    color: '#4338ca',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  titulo: {
    color: '#111827',
    fontSize: 23,
    fontWeight: '700',
    margin: 10,
  },
  descricao: {
    marginTop: 8,
    color: '#64748b',
    fontSize: 15,
    lineHeight: 22,
    margin: 10,
  },
  rodape: {
    // flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginTop: 20,
  },
  data: {
    flex: 1,
    color: '#475569',
    fontSize: 13,
    fontWeight: '600',
  },
  botao: {
    marginLeft: 12,
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderRadius: 12,
    backgroundColor: '#4f46e5',
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  campo:{
    height: 24,
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 15,
    padding: 4,
  }
});

export default CardEventos