import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";


const ShopHeader = () => {
    const dispatch = useDispatch();
    const onSubmitTask = () => {
        if(shop.trim().length === 0) {
            Alert.alert("Add a something");
            setShop("");
            return;
        }
        dispatch(addTask({
            task: shop
        }));
    }

    const [shop, setShop] = useState("");
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 50 }}>
                Shopping List
            </Text>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TextInput style={{
                    borderColor: "gray", borderWidth: 1, padding: 10, margin: 10,
                    width: "80%", borderRadius: 5,
                }} placeholder="Add to your cart" onChangeText={setShop} value={shop}>
                </TextInput>
                <TouchableOpacity style={{
                    backgroundColor: "#add8e6", padding: 15, margin: 30, width: "80%",
                    borderRadius: 5, alignItems: "center"
                }} onPress={onSubmitTask}>
                    <Text style={{ color: "white" }}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ShopHeader;
const styles = StyleSheet.create({});