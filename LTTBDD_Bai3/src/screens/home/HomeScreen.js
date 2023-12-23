import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./HomeScreen.styles";
import Card from "../../components/card/Card";

const HomeScreen = () => {

    const navigation = useNavigation();
    const topics = [
        `Tạo một màn hình sử dụng các component trên hiển thị thông tin cơ bản như tên, mssv, lớp.`

        ,`Tạo một màn hình với thành phần TouchableOpacity với sự kiện log ra màn hình tên, lớp, mssv.`

        ,`Tạo một màn hình với các component đã học ở trên hiển thị hình ảnh bất kì ở giữa màn hình.`

        ,`Tạo một màn hình với các component đã học trên hiển thị 1 danh sách 100 item với các chuỗi tên random (có scrollview) như ví dụ trên.`

        ,`Viết một màn hình sử dụng các component đã học ở trên và sử dụng kiểu Inline Styles cho thẻ <View> và sử dụng kiểu External Styles with Stylesheet cho các thẻ con như <Text> theo hình.`

        ,(`Tạo một màn hình với các component cơ bản đã học như hình`
        + `\n\n1. Sử dụng component hiển thị hình ảnh (thay thế hình trong thẻ bằng hình ảnh bất kì)`
        + `\n\n2. Sử dụng component hiển thị thông tin cá nhân như hình dưới`
        + `\n\n3. Sử dụng component nút nhấn và tạo sự kiện in ra màn hình chữ ‘Hello React Native’`)
    ];

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            {topics.map((topic, topicIndex) => (
                <Card
                    key={topicIndex}
                    title={`Bài ${topicIndex+1}`}
                    content={topic}
                    onPress={() => navigation.navigate(`ex${topicIndex+1}`)}
                />
            ))}

        </ScrollView>
    );
};

export default HomeScreen;