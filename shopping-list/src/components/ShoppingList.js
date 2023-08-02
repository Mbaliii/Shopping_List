import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useState } from "react";


const ShoppingList = () => {
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
                <Text style={styles.delete}>Delete</Text>
            </View>
        );
    };

    return (
        <View>
            {/* <Text>Shopping List</Text> */}
            <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id.toString()}></FlatList>
        </View>
    )
}

export default ShoppingList;

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    delete: {
        fontSize: 24,
        color: 'red',
    }
});