import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import uuid from 'uuid/v4'
import MainPage from './src/views/MainPage'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      savedTodos: []
    }
    this.savedTodoHandler = this.savedTodoHandler.bind(this)
    this.deleteAllTodos = this.deleteAllTodos.bind(this)
  }

  savedTodoHandler(todo) {
    this.setState({
      savedTodos: [...this.state.savedTodos,{ "key":uuid(), "value":todo }]
    },() => {
      console.log(this.state.savedTodos)
    })
  }

  deleteAllTodos() {
    this.setState({
      savedTodos:[]
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <MainPage onSavedTodo={this.savedTodoHandler} savedTodos={this.state.savedTodos} deleteAllTodos={this.deleteAllTodos} />
      </View>
    );
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
