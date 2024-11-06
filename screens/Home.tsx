import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { router } from "../router";
import { SvgUri } from "react-native-svg";

type Props = NativeStackScreenProps<router, "Home">;

const Home = ({navigation}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: '#0D0D12',
        gap: 48,
        paddingBottom: 24,
        paddingTop: 24,
      }}
    >
      <Image source={require("../assets/images/homepage/logo.png")}  style={styles.image}/>
      <Text style={{color: "#FFFFFF", fontSize: 24,}}>Hi, how can i help you?</Text>
      <View style={{
        gap: 32, 
        flexDirection: "column", 
        alignContent: "center", 
        alignItems: "center",
        }}>
        <TouchableOpacity style={styles.capture_button} onPress={() => navigation.navigate("Image")} >
          <Image source={require("../assets/images/homepage/camera.png")}/>
          <Text style={{color:'#ffffff'}}>Upload Image</Text>
        </TouchableOpacity> 
        <View style={styles.container}>
          <View style={styles.line}></View>
          <Text style={styles.text}>OR</Text>
          <View style={styles.line}></View>
        </View>
        <Text style={styles.prompt_label}>Start typing prompt here...</Text>
      </View>
      <View style={{
        flexDirection: "row",
        borderRadius: 999,
        padding: 4,
        backgroundColor: "#FFFFFF",
        marginTop: 12,
      }}>
        <TouchableOpacity style={styles.search_button} >
          <Image source={require("../assets/images/homepage/search.png")}/>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.menu_button} >        
          <Image source={require("../assets/images/homepage/list.png")}/>  
        </TouchableOpacity> 
        <TouchableOpacity style={styles.user_button} >  
          <Image source={require("../assets/images/homepage/user.png")}/>        
        </TouchableOpacity> 
      </View>
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    width: 335,
    height: 20,
    gap: 10
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: '#ccc', 
  },
  text: {
    color: '#ffffff',
    fontSize: 14,
  },
  image: {
    height: 106,
    width: 90,
    overlayColor: "white"
  },
  capture_button: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#666D80',
    paddingTop: 16,
    paddingRight: 10,
    paddingBottom: 16,
    paddingLeft: 10,
    gap: 10,
    height: 52,
    width: 335,
    columnGap: 12,
    flexDirection: "row",
    justifyContent: "center",
  },
  search_button: {
    borderRadius: 100,
    backgroundColor: '#1A9FFF',
    padding: 16,
    gap: 4,
    height: 52,
    width: 52,
    flexDirection: "row",
    justifyContent: "center",
  },
  menu_button: {
    borderRadius: 100,
    backgroundColor: '#ECEFF3',
    padding: 16,
    gap: 4,
    height: 52,
    width: 52,
    flexDirection: "row",
    justifyContent: "center",
  },
  user_button: {
    borderRadius: 100,
    backgroundColor: '#ECEFF3',
    padding: 16,
    gap: 4,
    height: 52,
    width: 52,
    flexDirection: "row",
    justifyContent: "center",
  },
  prompt_label: {
    fontSize: 16, 
    color: '#666D80', 
    paddingTop: 16, 
    paddingRight: 20, 
    paddingBottom: 16, 
    paddingLeft: 20, 
    gap: 12, }

});