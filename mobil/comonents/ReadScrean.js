import {StyleSheet, Text, View } from "react-native";

export default function ReadScrean() {
    return (
        <View style={styles.container}>
          <Text>Jármővek listája</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: '50%',
        fontSize: 32,
        textAlign: 'center',
        marginTo: 30,
    }

});