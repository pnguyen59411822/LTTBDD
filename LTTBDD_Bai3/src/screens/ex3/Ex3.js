import { View, Image } from "react-native";

import styles from "./Ex3.styles";
import images from "../../constants/images"


const Ex3 = () => {

    return(
        <View style={styles.container}>
            <Image
                source={images.chart}
                style={styles.chart}
                resizeMode="center"
            />
        </View>
    );
}

export default Ex3;