import React from "react";
import {
    View,
    Text,
    useColorScheme,
    StyleSheet
} from "react-native";

const AppPro = ():JSX.Element => {
    const isDarkMode = useColorScheme() === "light";

    return(
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                    Hello again!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: 'center'
    },
    whiteText: {
        color: "#ffffff"
    },
    darkText: {
        color: "#000000"
    }
});

export default AppPro;