import React from 'react';
import { Text, Image, TouchableWithoutFeedback, SafeAreaView, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { black, brown, gold, pink, transparentBlack } from '../utilities/colors';
import { AirbnbRating } from 'react-native-ratings';
import { getWhole, getDecimal } from '../utilities/numbers';
import styles from './styles/movie-details.style'
import { convertToGenre } from '../utilities/genre';

export default function MovieDetails({ navigation, route }) {
    const movie = route.params.item;
    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.topContainer}>
                <Image style={styles.trailer} source={{ uri: "http://image.tmdb.org/t/p/w342" + movie.backdrop_path }} />
                <TouchableWithoutFeedback onPress={() => Linking.openURL( 'vnd.youtube://results?search_query=' + movie.title)}>
                    <LinearGradient colors={[ gold, pink]} style={styles.linearGradientTrailer}>
                        <Image style={styles.playButton} source={require('../assets/playbutton.png')} />
                    </LinearGradient>
                </TouchableWithoutFeedback>
                <LinearGradient style={styles.linearGradientPoster} colors={['transparent', transparentBlack, transparentBlack, black]} />
                <Image style={styles.image} source={{ uri: "http://image.tmdb.org/t/p/w342" + movie.poster_path }} />
                <SafeAreaView style={styles.titleContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.info}>
                    <Text style={styles.infoText}><Text style={styles.popularity}>{getWhole(movie.popularity)}</Text> People watching</Text>
                    <Text style={styles.infoText}>{movie.genre_ids ? convertToGenre(movie.genre_ids) : "No generes where found"}</Text>
                    <Text style={styles.rating}>{getWhole(movie.vote_average)}
                        <Text style={styles.ratingStars}>.{getDecimal(movie.vote_average)}</Text>
                        <AirbnbRating showRating={false} count={5} defaultRating={(movie.vote_average) / 2} size={18} selectedColor={brown} isDisabled={true} />
                    </Text>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.bottomContainer}>
                <Text style={styles.desc} numberOfLines={10}>{movie.overview}</Text>
                <SafeAreaView style={styles.btnContainer}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Reviews", { item: movie })}>
                        <LinearGradient style={styles.linearGradientReviews} colors={[gold, pink]} start={{ x: 0.0, y: 0.25 }} end={{ x: 0.9, y: 1.0 }}>
                            <Text style={styles.reviewsButton}>Show Reviews</Text>
                        </LinearGradient>
                    </TouchableWithoutFeedback>
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    );
}