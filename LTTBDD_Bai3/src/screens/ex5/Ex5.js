import { View, Text } from "react-native";

import styles from "./Ex5.styles";
import Card from "../../components/card/Card";

const Ex5 = () => {

    const info = {
        name: 'Nguyễn Đại Phúc',
        id: '120001417',
        class: '20CT114'
    };

    return(
        <View style={styles.container}>
            <Card
                title={'Tên'}
                content={info.name}
                containerStyle={styles.item}
            />
            
            <Card
                title={'Mã số sinh viên'}
                content={info.id}
                containerStyle={styles.item}
            />

            <Card
                title={'Lớp'}
                content={info.class}
                containerStyle={styles.item}
            />
        </View>
    );
}

export default Ex5;