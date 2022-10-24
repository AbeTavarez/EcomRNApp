import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  root: {

  },
  image: {
    width: windowWidth - 40,
    margin: 10,
    height: 250,
    resizeMode: 'contain',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#ededed',
    borderColor: '#c9c9c9',
    margin: 5,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
});

export default styles;