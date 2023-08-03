import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const TodoHeader = () => {
    const [todo, setTodo] = useState("");

    const dispatch = useDispatch();

    const onSubmitTask = () => {
        if (todo.trim().length === 0) {
            Alert.alert("Add Something");
            setTodo("");
            return;
        }

        dispatch(
            addTask({
                task: todo,
            })
        );
        setTodo("");
    };

    return (
        <View>
            <Text style={{
                fontSize: 25, fontWeight: "bold", textAlign: "center", marginTop: 50,
            }}>Shopping List</Text>
            <View style={{ justifyContent: "center", alignItems: "center", }}>
                <TextInput style={{
                    borderColor: "#c0c0c0", borderWidth: 1,
                    padding: 10, margin: 10, width: "90%", borderRadius: 5,
                }}
                    placeholder="Add your list ..."
                    onChangeText={setTodo} value={todo} />
                <TouchableOpacity
                    style={{
                        backgroundColor: "#c0c0c0", padding: 10,
                        margin: 10, width: "90%", borderRadius: 5, alignItems: "center",
                    }} onPress={onSubmitTask}>
                    <Text style={{ color: "white" }}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TodoHeader;

const styles = StyleSheet.create({});
