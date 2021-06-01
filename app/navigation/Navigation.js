import React from 'react';
import {TouchableOpacity, Image, Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import MovieDetails from '../screens/MovieDetails';
import Reviews from '../screens/Reviews';
import ReviewDetails from '../screens/ReviewDetails';
import styles from './styles/navigation.style';

const Stack = createStackNavigator();
const getButtonReviews = ({ navigation }) => {
    return (
        <TouchableOpacity style={ styles.buttonContainer } onPress={() => navigation.goBack()}>
            <Image style={styles.backbuttonReviews} source={require('../assets/backbutton.png')} />
            <Text style={ styles.textWhite}>Back</Text>
        </TouchableOpacity>
    );
};
const getButtonMovie = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.goBack()}>
            <Image style={styles.backbuttonMovie} source={require('../assets/backbutton.png')} />
            <Text style={ styles.textBlack }>Back</Text>
        </TouchableOpacity>
    );
};

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen style={styles.container}
                    name="Home"
                    component={Home}
                    options={() => ({
                        headerStyle: {
                            backgroundColor: 'transparent',
                        },
                        headerTintColor: 'transparent',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerTransparent: true,
                        headerTitle: '',
                    })}
                />
                <Stack.Screen style={styles.container}
                    name="MovieDetails"
                    component={MovieDetails}
                    options={(nav) => ({
                        headerStyle: {
                            backgroundColor: 'transparent',
                        },
                        headerTransparent: true,
                        headerTitle: '',
                        headerLeft: () => (getButtonMovie(nav)),
                    })}
                />
                <Stack.Screen style={styles.container}
                    name="Reviews"
                    component={Reviews}
                    options={(nav) => ({
                        headerStyle: {
                            backgroundColor: 'transparent',
                        },
                        headerTransparent: true,
                        headerTitle: '',
                        headerLeft: () => (getButtonReviews(nav)),
                    })}
                />
                <Stack.Screen style={styles.container}
                    name="ReviewDetails"
                    component={ReviewDetails}
                    options={(nav) => ({
                        headerStyle: {
                            backgroundColor: 'transparent',
                        },
                        headerTransparent: true,
                        headerTitle: '',
                        headerLeft: () => (getButtonReviews(nav)),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
