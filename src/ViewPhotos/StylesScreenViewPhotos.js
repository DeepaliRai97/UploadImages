import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    imageViewerContainer: {
        backgroundColor: Colors.lighter,
        height: '100%',
        marginTop: 50,
        padding: 5,
    },
    imageContainer: {
        height: '90%',
    },
    image: {
        margin: 5,
        width: '50%',
        height: 150,
    },
});

export default styles;