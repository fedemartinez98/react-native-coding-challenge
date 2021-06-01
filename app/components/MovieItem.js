import React from 'react';
import { Text, Image, TouchableWithoutFeedback, SafeAreaView, FlatList } from 'react-native';
import { convertToYear } from '../utilities/dates';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import styles from './styles/movie-item.style'
import { black, gold, pink, transparentBlack } from '../utilities/colors';

export default function MovieItem(props) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>MOVIES</Text>
            <SafeAreaView style={styles.moviecontainer}>
                <FlatList data={props.item} keyExtractor={item => item.id} numColumns={2} renderItem={({ item, index }) => {
                    return (
                        <SafeAreaView style={styles.containerItem}>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate("MovieDetails", { item: item })}>
                                <SafeAreaView>
                                    <Image style={styles.poster} source={{ uri: "http://image.tmdb.org/t/p/w342" + item.poster_path, }} />
                                    <LinearGradient colors={['transparent', transparentBlack, transparentBlack, black]} style={styles.linearGradient} />
                                    <SafeAreaView style={styles.onTop}>
                                        <Text style={styles.date}>{convertToYear(item.release_date)}</Text>
                                        <Text style={styles.title}>{item.title} </Text>
                                    </SafeAreaView>
                                    <SafeAreaView style={styles.onTopVote}>
                                        <LinearGradient colors={[gold, pink]} style={styles.linearGradientVote}>
                                            <Text style={styles.vote}>{item.vote_average}</Text>
                                        </LinearGradient>
                                    </SafeAreaView>
                                </SafeAreaView>
                            </TouchableWithoutFeedback>
                        </SafeAreaView>);
                }}>
                </FlatList>
            </SafeAreaView>
        </SafeAreaView>
    );
}