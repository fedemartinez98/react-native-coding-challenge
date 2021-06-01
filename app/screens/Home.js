import React, { Component } from 'react';
import { SafeAreaView} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import MovieItem from '../components/MovieItem';
import { checkExpiration, getItem, setItem } from '../utilities/asyncStorage';
import styles from './styles/home.style'

export default class Home extends Component {
  mounted = false;
  state = {
    popularMovies: [],
    loading: false,
    currentPage: 0,
    timeout: false,
  }

  componentDidMount = async () => {
    const storageState = await getItem('HomeState')
    const date = await getItem('Date');
    checkExpiration(date);
    if (storageState) {
      this.setState({ ...storageState });
    }
    else {
      this.mounted = true;
      this.timeHandeler()
      const endpoint = "http://api.themoviedb.org/3/discover/movie?api_key=f84575cf661ddb3ff37782bbd640b6b5&language=en-US"
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
          currentPage: responseJson.page,
          popularMovies: [...this.state.popularMovies, ...results],
          loading: false,
        }, async () => {
          await setItem('HomeState', JSON.stringify(this.state));
          await setItem('Date', JSON.stringify(new Date().getTime()));
        });
        this.mounted = false;
      }
    }
    catch (error) {
      console.error(error);
    }
  }

  timeHandeler = async () => {
    if (this.mounted) {
      this.setState({ loading: true })
      setTimeout(() => {
        this.setState({ loading: false });
        this.setState({ timeout: true });
      }, 3000)
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Spinner visible={this.state.loading} />
        {this.state.timeout && this.state.currentPage == 0 ? alert('Time exeded, please check your internet connection') : <MovieItem item={this.state.popularMovies} key={this.state.currentPage} />}
      </SafeAreaView>
    );
  }
}