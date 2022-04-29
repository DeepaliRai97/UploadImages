import {StyleSheet,Dimensions} from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFDAB9',
    },
    button: {
        width: 180,
        height: 60,
        backgroundColor:'#FA8072',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
    },
    subContainer: {
        width: width,
        height: height / 4,
      },
      textContainer: {
        marginTop:15,
        textAlign: 'center',
      },
      cancelTextContainer: {
        textAlign: 'center',
        backgroundColor:'white',
        marginBottom:10
      },
      textMsg: {
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: 'center',
        color: '#0a7aff',
        marginTop: 10,
      },
      cancelTextMsg: {
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'center',
        color: 'red',
      },
      bottomLine:{
        borderBottomWidth:1,borderBottomColor:'blue',marginTop:10
      },
});

export default styles;