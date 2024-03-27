import {StyleSheet, Text, View, } from "react-native";

export default function CreateScrean() {
    return (
        <View style={styles.container}>
          <Text>Jármővek Létrehozása</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });