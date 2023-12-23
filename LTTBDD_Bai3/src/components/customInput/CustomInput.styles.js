import { StyleSheet } from "react-native";

import COLORS from "../../constants/colors";
import BORDERS from "../../constants/border";
import SHADOWS from "../../constants/shadows";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 10,
        ...BORDERS.default,
    }
});

export default styles;