import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'

export default class DoneFlatList extends Component { 
    render() {
        return (
            <View style={styles.container}>
                    <Text className="title_hecho">Hecho</Text>
                    <FlatList
                        data={this.props.savedTodos}
                        renderItem={({item}) => <Text>{item.value}</Text>}
                    />
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
    title_hecho: {
        color: '#ffffff'
    }
});