import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useEffect, useState } from "react";
import { ChatScreen } from "./screens/ChatScreen";
import { Login } from "./screens/Login";

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#151718",
  },
  viewStyle: {
    height: "100%",
    alignItems: "center",
    backgroundColor: "#151718",
    color: "#fff",
  },
});

const App = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });

    return () => {
      unsubscribe();
    };
  });

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.viewStyle}>{user ? <ChatScreen /> : <Login />}</View>
    </SafeAreaView>
  );
};
export default App;
