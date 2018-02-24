import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import NewTextHandler from '../components/common/NewTextHandler'
import TodoFlatList from '../components/common/TodoFlatList'

export default class MainPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <NewTextHandler onSavedTodo={this.props.onSavedTodo} deleteAllTodos={this.props.deleteAllTodos} />
                    {this.props.savedTodos.length > 0 
                        ? <TodoFlatList savedTodos={this.props.savedTodos} showTitle={true} /> 
                        : <TodoFlatList savedTodos={this.props.savedTodos} showTitle={false} /> 
                    }
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
    },
});