import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";
import SHADOWS from "../../constants/shadows";
import BORDERS from "../../constants/border";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 10,
        backgroundColor: COLORS.white,
        ...SHADOWS.default,
        ...BORDERS.default
    }

    , title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.black
    }

    , text: {
        marginTop: 10,
        color: COLORS.gray
    }
});

export default styles;