import colors from "./colors";
import { StyleSheet } from 'react-native';

export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: colors.white,
    },
    paddedCenterContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    paddedContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: colors.white,
        padding: 20
    },
    absoluteCenter: {
        alignItems: "center",
        justifyContent: "center",
    },
    verticalCenter: {
        justifyContent: "center",
    },
    horizontalCenter: {
        alignItems: "center",
    }
});

export default defaultStyles;