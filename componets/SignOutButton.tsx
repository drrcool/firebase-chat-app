import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
  },
});

export const SignOutButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <TouchableOpacity onPress={handleClick}>
      <Text style={styles.text}>Sign Out</Text>
    </TouchableOpacity>
  );
};
