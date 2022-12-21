import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aeef'
  },
  cronometro: {

  },
  timer: {
    marginTop: -160,
    fontSize: 65,
    color: '#FFF',
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltimo: {
    marginTop: 40,
  },
  btnUltimo: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF',
  },
})