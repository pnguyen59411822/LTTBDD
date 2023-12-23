import { TextInput, View } from "react-native";
import styles from "./CustomInput.styles";

const CustomInput = ({
    value,
    placeholder,
    onChangeText,
    containerStyle,
    textStyle,
    inputProps

}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <TextInput
                style={[styles.text, textStyle]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                {...inputProps}
            />
        </View>
    );
};

export default CustomInput;