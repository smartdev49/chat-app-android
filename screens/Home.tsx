import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { router } from "../router";
import Modal from "react-native-modal";
import { MaterialIcons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<router, "Home">;

const Home = ({navigation}: Props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputHeight, setInputHeight] = useState(40);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
        <TouchableOpacity onPress={toggleModal}>
        <Text style={styles.prompt_label}>Start typing prompt here...</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button_group}>
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
      <Modal
        isVisible={isModalVisible}
        style={styles.modal}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.5}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={toggleModal} style={styles.close_button}>
                <MaterialIcons name="close" size={24} color={'#666D80'}/>
            </TouchableOpacity>
            <TextInput multiline={true} placeholder="|Start typing prompt here..." 
                style={[{
                    width: '100%',
                    paddingTop: 16,
                    paddingBottom: 16,
                    paddingLeft: 20,
                    paddingRight: 20,
                    fontSize: 16,
                    color: "#ffffff",
                }, {height: inputHeight},
                ]}
                placeholderTextColor={'#818898'}
                onContentSizeChange={(event) => {             
                    const { height } = event.nativeEvent.contentSize;
                    setInputHeight(height);
                    console.log("content height:", height)
                }}
                />
            <TouchableOpacity style={styles.submit_button} onPress={()=>{                    
              }} >
              <Text style={{
                  fontSize: 14,
                  lineHeight: 20,
                  fontFamily: "Inter Tight",
                  letterSpacing: 2,
                  fontWeight: "bold",
              }}>Submit</Text>
              <Image
              source={require('../assets/images/homepage/send-ai.png')}
              width={20} height={20}
              />
            </TouchableOpacity>
          </View>
        </Modal>
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
    gap: 12, },
  button_group: {
      flexDirection: "row",
      borderRadius: 999,
      padding: 4,
      backgroundColor: "#FFFFFF",
      marginTop: 12,
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
    marginTop: 50,
    backgroundColor: "#00000040",
  },
  modalContent: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D0D12',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    gap: 12,
  },
  close_button: {    
    position: "absolute",
    right: 25,
    top: 25,
  },
  submit_button: {
    flexDirection: "row",
    borderRadius: 100,
    backgroundColor: '#33CFFF',
    height: 52,
    width: 335,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 10,
    paddingRight: 10,
    gap: 12,
    marginBottom: 20,
}

});