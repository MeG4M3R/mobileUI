import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

/*
Green (Main Accent): #018A00
Green (Text & Icons): #7BC86A
White (Text): #FFFFFF
Light Gray (Alt Text): #CDCDCD
Black (Page Background): #000000
Dark Gray (Page Elements): #1C1C1C
Dark Gray (Alt Page Elements): #252525
Dark Green (Alt Page Elements): #263621
Gray (Element Dividers): #313131
*/
