import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import { SignOutButton } from "../componets/SignOutButton";
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    margin: 0,
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    paddingBottom: "15%",
    paddingTop: 0,
    backgroundColor: "#151718",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "600",
    fontSize: 20,
    color: "white",
    marginRight: "auto",
    marginLeft: 8,
    padding: 4,
  },
});
export const ChatScreen = () => {
  const [inputText, setInputText] = useState<string>("");
  const [chats, setChats] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const timestamp = firestore.FieldValue.serverTimestamp();

  const handleSignOut = async () => await auth().signOut();
  const username = auth().currentUser?.displayName;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{username}</Text>
      <SignOutButton handleClick={handleSignOut} />
    </View>
  );
};
