import React from 'react';
import { Text, ScrollView, SafeAreaView } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import styles from './styles/review-details.style'

export default function ReviewDetails({ route }) {
    const review = route.params.item;
    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView>
                <Text style={[styles.title]}>{review.author_details.username}</Text>
                <ScrollView>
                    <AirbnbRating showRating={false} count={5} defaultRating={review.author_details.rating ? (review.author_details.rating / 2) : 0} size={30} isDisabled={true} />
                    <Text style={styles.overview}>{review.content}</Text>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaView>
    );
}