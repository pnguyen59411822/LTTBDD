import { useState } from "react";
import { View, Text, Image } from "react-native";

import styles from "./Ex6.styles";
import images from "../../constants/images";
import Card from "../../components/card/Card";
import CustomButton from "../../components/customButton/CustomButton";

const Ex6 = () => {

    const [isVisible, setIsVisible] = useState(false);

    const info = {
        name: 'Nguyễn Đại Phúc',
        id: '120001417',
        class: '20CT114'
    };

    const onPress = () => {
        setIsVisible(!isVisible);
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={images.chart}
                resizeMode="center"
            />

            <Card
                title={'Tên'}
                content={info.name}
            />

            <Card
                title={'Mã số sinh viên'}
                content={info.id}
            />

            <Card
                title={'Lớp'}
                content={info.class}
            />

            <CustomButton
                title={isVisible ? 'Ẩn thông tin' : 'Hiển thị thông tin'}
                onPress={onPress}
            />

            {isVisible && (
                <Card
                    title={'Hello react'}
                />
            )}
        </View>
    );
}

export default Ex6;