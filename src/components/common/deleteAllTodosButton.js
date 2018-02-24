import React, { Component } from 'react'
import { View, StyleSheet, Button } from 'react-native'

export default class deleteAllTodosButton extends Component {
    constructor(props) {
        super(props)

        this.onDeleteTodos = this.onDeleteTodos.bind(this)
    }
    
    onDeleteTodos(e) {
        e.preventDefault()
        this.props.deleteAllTodos()
    }

    render() {
        return <View>
                <Button
                    title="Borrar todo"
                    onPress={this.onDeleteTodos}
                /> 
            </View>
    }
}