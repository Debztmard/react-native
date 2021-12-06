import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

const Desafio = () => {
  return (
    <>
      <View>
        <View style={estilos.navbar} />
        <View style={estilos.logo} />
        <View style={estilos.descricao} />
        <View style={estilos.barras}>
          <View style={estilos.barra1} />
          <View style={estilos.barra2} />
        </View>
        <View style={estilos.barra3} />
        <View style={estilos.viewConteudo}>
          <View style={estilos.conteudo} />
          <View style={estilos.conteudo} />
          <View style={estilos.conteudo} />
        </View>
        <View style={estilos.viewConteudo}>
          <View style={estilos.conteudo} />
          <View style={estilos.conteudo} />
          <View style={estilos.conteudo} />
        </View>
        <View style={estilos.footer} />
      </View>
      <StatusBar style="auto" />
    </>
  );
};

const estilos = StyleSheet.create({
  navbar: {
    backgroundColor: "#0095b3",
    width: "100%",
    height: "8%",
  },
  logo: {
    height: 110,
    width: 110,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 50,
    backgroundColor: "#076578",
  },
  descricao: {
    height: 40,
    width: 200,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 30,
    backgroundColor: "#076578",
  },
  barras: {
    height: 80,
    flexDirection: "row",
    marginTop: 50,
  },
  barra1: {
    width: "50%",
    backgroundColor: "#9778ff",
  },
  barra2: {
    width: "50%",
    backgroundColor: "#240d70",
  },
  barra3: {
    height: 10,
    backgroundColor: "#0095b3",
  },
  viewConteudo: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  conteudo: {
    height: 110,
    width: 110,
    marginTop: 40,
    backgroundColor: "#076578",
  },
  footer: {
    height: 80,
    marginTop: 50,
    backgroundColor: "#240d70",
  },
});
export default Desafio;
