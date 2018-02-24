import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import uuid from 'uuid/v1'
import SubmitTodoButton from './SubmitTodoButton'
import DeleteAllTodosButton from './deleteAllTodosButton'

export default class GenericTextInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
          text: ''
        }
        
        this.clearTextInput = this.clearTextInput.bind(this)
    }

    clearTextInput() {
      this.setState({ text: '' })
    }
      
    render() {
        return <View style={styles.container}>
        <TextInput
          style={{ marginTop:80, height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
          placeholder='¿Qué tienes que hacer?'
         />
        <SubmitTodoButton onSavedTodo={this.props.onSavedTodo} text={this.state.text} clearTextInput={this.clearTextInput} />
        <DeleteAllTodosButton deleteAllTodos={this.props.deleteAllTodos} />
      </View>
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