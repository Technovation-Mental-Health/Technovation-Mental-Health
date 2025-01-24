import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { UserContext } from '../UserContext';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    Chat: undefined;
};

interface HomeScreenProps{
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const HomeScreen = ({navigation}: HomeScreenProps) => {

    const {points, setPoints} = React.useContext(UserContext);

    return (
        <View style={styles.container}>
            <Text style = {styles.title}>Welcome to Peer Counseling</Text>
            <Text>Your Points: {points}</Text>
            <Button
                title = "Earn Points"
                onPress = {() => setPoints(points + 10)}
                />
            <Button
                title = "Go to Chat"
                onPress = {() => navigation.navigate('Chat')}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:  'center',
        alignItems: 'center',
        backgroundColor: 'f5f5f5'
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default HomeScreen;