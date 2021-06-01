import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text, Button, Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import ReviewItem from '../components/ReviewItem'
import { getItem, setItem } from '../utilities/asyncStorage';
import styles from './styles/reviews.style'

export default class Reviews extends Component {
  movieId = null;
  moviePhoto = null;
  mounted = false;

  constructor(props) {
    super(props);
    this.movieId = props.route.params.item.id;
    this.moviePhoto = props.route.params.item.poster_path;
  }
  state = {
    loading: false,
    reviewsList: [],
    total_results: 0,
    currentPage: 0,
    total_pages: 0,
    timeout: false,
  }

  componentDidMount = async () => {
    const storageState = await getItem('ReviewState' + this.movieId)
    if (storageState) {
      this.setState({ ...storageState });
    }
    else {
      this.mounted = true;
      this.timeHandeler();
      const endpoint = "http://api.themoviedb.org/3/movie/" + this.movieId + "/reviews?api_key=802b2c4b88ea1183e50e6b285a27696e"
      this.fetchItems(endpoint);
    }
  }

  fetchItems = async (endpoint) => {
    const response = await fetch(endpoint);
    const responseJson = await response.json();
    try {
      const results = responseJson.results;
      if (this.mounted) {
        this.setState({
          loading: false,
          reviewsList: [...this.state.reviewsList, ...results],
          currentPage: responseJson.page,
          total_pages: responseJson.total_pages,
          total_results: responseJson.total_results,
        }, async () => {
          await setItem('ReviewState' + this.movieId, JSON.stringify(this.state));
        });
        this.mounted = false;
      }
    }
    catch (error) {
      console.error(error);
    }
  }

  timeHandeler = async () => {
    if (this._mounted) {
      this.setState({ loading: true })
      setTimeout(() => {
        this.setState({ loading: false });
        this.setState({ timeout: true });
      }, 1000)
    }
  }

  loadMoreItems = async () => {
    this.mounted = true;
    let endpoint = '';
    this.setState({ timeout: false });
    this.timeHandeler();
    endpoint = "http://api.themoviedb.org/3/movie/" + this.movieId + "/reviews?api_key=802b2c4b88ea1183e50e6b285a27696e&language=en-US&page=" + (this.state.currentPage + 1);
    this.fetchItems(endpoint);
  }

  render() {
    if (this.state.total_results > 0 && !this.state.loading) {
      return (
        <SafeAreaView style={styles.fullcontainer}>
          <Spinner visible={this.state.loading} />
          <Image style={styles.image} source={{ uri: "http://image.tmdb.org/t/p/w342" + this.moviePhoto }} />
          <SafeAreaView style={styles.container}>
            <Text style={[styles.reviewsTitle]}><Text style={[styles.reviewsText]}>Reviews </Text>({this.state.total_results})</Text>
            <ScrollView vertical={true} style={styles.scrollView}>
              <SafeAreaView style={{ flexDirection: "column" }}>
                {this.state.reviewsList.map((review, key) => {
                  return (
                    <ReviewItem style={styles.reviewContainer} key={key} review={review} />)
                })}
              </SafeAreaView>
              <SafeAreaView style={styles.button}>
                {this.state.currentPage != 0 && this.state.currentPage < this.state.total_pages ? (
                  <Button
                    title="Load More"
                    onPress={(this.loadMoreItems)}
                  />) : <Spinner visible={this.state.loading} />
                }
              </SafeAreaView>
            </ScrollView>
          </SafeAreaView>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView style={styles.fullcontainer}>
          <Image style={styles.image} source={{ uri: "http://image.tmdb.org/t/p/w342" + this.moviePhoto }} />
          <SafeAreaView style={styles.containerMessage}>
            <Spinner visible={this.state.loading} />
            {this.state.timeout ? <Spinner visible={this.state.loading} /> : (<Text style={styles.warning}>No reviews where found</Text>)}
          </SafeAreaView>
        </SafeAreaView>
      );
    }
  }
}