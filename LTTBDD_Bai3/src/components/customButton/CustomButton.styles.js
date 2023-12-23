import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: COLORS.blue,
        borderRadius: 8,
    }

    , text: {
        fontSize: 16,
        color: COLORS.white
    }
});

export default styles;