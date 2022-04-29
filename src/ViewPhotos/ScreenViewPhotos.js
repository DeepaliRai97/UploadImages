
import React, { useEffect, useState } from 'react';
import {
    View,
    Platform,
    FlatList,
    Image,
} from 'react-native';
import styles from './StylesScreenViewPhotos';

const ScreenViewPhotos = ({ route }) => {
    const [imageList, setImageList] = useState([])
    const extractRequiredImageData = () => {
        let imageData = route?.params;
        let imageList = [];

        for (let i = 0; i < Object.keys(imageData).length; i++) {
            let data = imageData[String(i)];
            let image = {
                id: String(i),
                contentType: data.mime,
                fileSize: data.size,
                filePath: data.path,
            };

            if (Platform.OS === 'ios') {
                image.fileName = data.filename;
            } else {
                let path = data.path.split('/');
                image.fileName = path[path.length - 1];
            }

            imageList.push(image);
        }
        setImageList(imageList)
    };

    useEffect(() => {
        extractRequiredImageData();
    }, [])


    return (
        <View style={styles.imageViewerContainer}>
            <View style={styles.imageContainer}>
                <FlatList
                    data={imageList}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <Image style={styles.image} source={{ uri: item.filePath }} />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}

export default ScreenViewPhotos;