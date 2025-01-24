import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const ChatScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Chat with Peers</Text>
            {/* Add your code here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default ChatScreen;