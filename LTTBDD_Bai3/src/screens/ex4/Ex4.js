import { ScrollView, Text } from "react-native";

import styles from "./Ex4.styles";
import Card from "../../components/card/Card";

const Ex4 = () => {

    const randomItems = Array.from( {length: 100}, (_, index) => ({
        id: index.toString(),
        name: `Item ${index+1}`
    }));

    return(
        <ScrollView contentContainerStyle={styles.container}>
            {randomItems.map((item) => (
                <Card
                    key={item.id}
                    title={item.name}
                />
            ))}
        </ScrollView>
    );
}

export default Ex4;