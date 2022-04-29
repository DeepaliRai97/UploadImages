import React , {createRef}from 'react';
import { View, Text, TouchableOpacity ,Dimensions } from 'react-native';
import styles from './StylesScreenHome';
import ImagePicker from "react-native-image-crop-picker";
import ActionSheet from 'react-native-actions-sheet';

const ScreenHome = ({ navigation }) => {

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const containerStyle = {
    width: width,
    height: height * 0.2,
  };
    const actionSheetRef = createRef();

    const navigateToViewPhotos = data => {
        navigation.navigate('ScreenViewPhotos', data);
    };

    const choosePhotosFromGallery = () => {
        actionSheetRef?.current.setModalVisible(false)
        ImagePicker.openPicker({
            width: 300,
            height: 200,
            multiple: true,
        })
            .then(images => {
                console.log(images)
                if (images.length > 0) {
                    navigateToViewPhotos(images);
                }
            })
            .catch(err => {
                console.log(' Error fetching images from gallery ', err);
            });
    };


    return (
        <View style={styles.container}>
         <ActionSheet
          ref={actionSheetRef}
          containerStyle={containerStyle}
        >
          <View style={styles.subContainer}>
        <TouchableOpacity onPress={()=>choosePhotosFromGallery()}>
           <View style={styles.textContainer}>
              <Text style={styles.textMsg}>Upload From Gallery</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.bottomLine}/>
        <TouchableOpacity onPress={()=> actionSheetRef?.current.setModalVisible(false)}>
           <View style={styles.textContainer}>
              <Text style={styles.cancelTextMsg}>Cancel</Text>
            </View>
        </TouchableOpacity>
          </View>
        </ActionSheet>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => actionSheetRef?.current.setModalVisible(true)}>
                    <Text style={styles.buttonText}>Select Images</Text>
                </TouchableOpacity>
            </View>
    )


}

export default ScreenHome;