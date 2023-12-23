import { TouchableOpacity, Text } from "react-native";

import styles from "./CustomButton.styles";

const CustomButton = ({ 
    title, 
    onPress, 
    containerStyle, 
    textStyle 
    
}) => {
    return(
        <TouchableOpacity
            style={[styles.button, containerStyle]}
            onPress={onPress}
        >
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;