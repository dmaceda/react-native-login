import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  function SvgTop() {
    return (
      <Svg width={700} height={600} xmlns="http://www.w3.org/2000/svg">
        <Path fill="#f1f1f1" d="M0 0h900v600H0z" />
        <Path
          d="m0 165 21.5 9.5C43 184 86 203 128.8 212.3c42.9 9.4 85.5 9 128.4 1 42.8-8 85.8-23.6 128.6-35.1 42.9-11.5 85.5-18.9 128.4-13.7 42.8 5.2 85.8 22.8 128.6 32.7 42.9 9.8 85.5 11.8 128.4 14.8 42.8 3 85.8 7 107.3 9l21.5 2V0H0Z"
          fill="#fa7268"
        />
        <Path
          d="m0 179 21.5.2c21.5.1 64.5.5 107.3 3.6 42.9 3.2 85.5 9.2 128.4 4.5 42.8-4.6 85.8-20 128.6-26.1 42.9-6.2 85.5-3.2 128.4 2.1 42.8 5.4 85.8 13 128.6 13 42.9 0 85.5-7.6 128.4-13 42.8-5.3 85.8-8.3 107.3-9.8L900 152V0H0Z"
          fill="#ef5f67"
        />
        <Path
          d="m0 92 21.5 6.3c21.5 6.4 64.5 19 107.3 25.7 42.9 6.7 85.5 7.3 128.4 9.7 42.8 2.3 85.8 6.3 128.6 4.8 42.9-1.5 85.5-8.5 128.4-12.2 42.8-3.6 85.8-4 128.6 1.9 42.9 5.8 85.5 17.8 128.4 19.6 42.8 1.9 85.8-6.5 107.3-10.6L900 133V0H0Z"
          fill="#e34c67"
        />
        <Path
          d="m0 114 21.5-1.8c21.5-1.9 64.5-5.5 107.3-10.4C171.7 97 214.3 91 257.2 91.3c42.8.4 85.8 7 128.6 6.2 42.9-.8 85.5-9.2 128.4-16.2C557 74.3 600 68.7 642.8 69c42.9.3 85.5 6.7 128.4 8.3C814 79 857 76 878.5 74.5L900 73V0H0Z"
          fill="#d53867"
        />
        <Path
          d="m0 50 21.5-1.7c21.5-1.6 64.5-5 107.3-9.1 42.9-4.2 85.5-9.2 128.4-5.7C300 37 343 49 385.8 55.8c42.9 6.9 85.5 8.5 128.4 6.7 42.8-1.8 85.8-7.2 128.6-10.2 42.9-3 85.5-3.6 128.4-5.5C814 45 857 42 878.5 40.5L900 39V0H0Z"
          fill="#c62368"
        />
      </Svg>
    );
  }
  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />
      <View style={styles.svgContainer}>
        <SvgTop />
      </View>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Hello!</Text>
          <Text style={styles.subtitle}>Sign In to your account</Text>
        </View>
        <TextInput style={styles.input} placeholder="dmaceda2288@gmail.com" />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
        />
        <View style={styles.pContainer}>
          <Text style={styles.p}>Forgot your password?</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <LinearGradient
            // Button Linear Gradient
            colors={["#C62368", "#FA7268"]}
            style={styles.button}
          >
            <Text style={styles.text}>SIGN IN</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text>Don't have an account?</Text>
          <Text style={{ fontWeight: "bold" }}>Create</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  svgContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "80%",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: "50%",
    height: 50,
    borderRadius: 50,
    marginTop: 50,
  },
  titleContainer: {
    width: "80%",
    marginTop: -400,
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 20,
    color: "gray",
  },
  input: {
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  text: {
    color: "white",
  },
  pContainer: {
    marginTop: 20,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width: "80%",
  },
  p: {
    color: "gray",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});
