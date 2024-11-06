import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import style from "../style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { router } from "../router";

type Props = NativeStackScreenProps<router, "Home">;

export default function Home({navigation}: Props) {
    return (
        <View style={style.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Image")}>
                <Text>ImageViewer</Text>
            </TouchableOpacity>
        </View>
    )
}