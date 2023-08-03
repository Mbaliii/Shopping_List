import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';



const ShoppingList = () => {
    const shops = useSelector((state) => state.tasks)
    const data = [
        {
            id: 1,
            title: 'Vegetables',
        },
        {
            id: 2,
            title: "Fruits"
        },
    ];

    const renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity style={styles.deleteButton} onPress={() => {
                    deleteItem(item.id)
                }}>
                    <Ionicons name="trash-bin" size={24} color="black" />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View>
            {/* <Text>Shopping List</Text> */}
            <FlatList data={shops} renderItem={renderItem} keyExtractor={(item) => item.id.toString()}></FlatList>
        </View>
    )
}

export default ShoppingList;

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#add8e6",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
    },
    delete: {
        fontSize: 24,
        color: 'red',
    }
});