import { View, Text } from "react-native";

import styles from "./Ex1.styles";
import Card from "../../components/card/Card";

const Ex1 = () => {

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
    );
}

export default Ex1;