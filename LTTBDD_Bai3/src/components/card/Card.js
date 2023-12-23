import { TouchableOpacity, Text } from "react-native";

import styles from "./Card.styles";

const Card = ({
    title,
    content,
    onPress,
    containerStyle,
    titleStyle,
    contentStyle

}) => {
    return (
        <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            <Text style={[styles.content, contentStyle]}>{content}</Text>
        </TouchableOpacity>
    );
};

export default Card;