import React, { Component } from 'react'
import { View, StyleSheet, Button } from 'react-native'

export default class SubmitTodoButton extends Component {
    constructor(props) {
        super(props)

        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }
    
    onSubmitHandler(e) {
        e.preventDefault()
        this.props.clearTextInput()
        this.props.onSavedTodo(this.props.text)
    }

    render() {
        return <View>
                    <Button
                        title="Enviar"
                        onPress={this.onSubmitHandler}
                    /> 
                </View>
    }
}