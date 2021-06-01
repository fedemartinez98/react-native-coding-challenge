import React from 'react';
import { Text, Image, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from './styles/review-item.style';
import { getUrl } from '../utilities/images';

export default function ReviewItem(props) {
    const navigation = useNavigation();
    const profile_photo = getUrl(props.review.author_details.avatar_path);
    const author = props.review.author_details;
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("ReviewDetails", { item: props.review })}>
            <SafeAreaView style={styles.containerItem}>
                <Image style={styles.poster}
                    source={author.avatar_path && author.rating ?
                        { uri: profile_photo } : require('../assets/user.png')} />
                <SafeAreaView style={styles.item}>
                    <Text style={styles.title}>{author.username} </Text>
                    <Text style={styles.overview} numberOfLines={3}>{props.review.content}</Text>
                </SafeAreaView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}