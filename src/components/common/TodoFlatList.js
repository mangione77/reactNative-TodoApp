import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'

export default class TodoFlatList extends Component { 
    render() {
        return (
                this.props.showTitle 
                    ? <View style={styles.container}>
                    <Text style={styles.todo_title}>Por hacer</Text>
                    <FlatList data={this.props.savedTodos} renderItem={({item}) => <Text style={styles.todo_list_item}>{item.value}</Text>} />
                    </View>
                    : <View style={styles.container}>
                    </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 0,
      textAlign: 'center'
    },
    todo_title: {
        fontSize:30,
        fontWeight: 'bold'
    },
    todo_list_item: {
        fontSize:16,
        color: 'red'
    }
});