import { useState } from "react";
import { View } from "react-native";

import styles from "./Ex2.styles";
import Card from "../../components/card/Card";
import CustomButton from "../../components/customButton/CustomButton";

const Ex2 = () => {

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

            <CustomButton
                title={isVisible ? 'Ẩn thông tin' : 'Hiển thị thông tin'}
                onPress={onPress}
            />

            {isVisible && (
                <View style={styles.info}>
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
                </View>
            )}
        </View>
    );
}

export default Ex2;