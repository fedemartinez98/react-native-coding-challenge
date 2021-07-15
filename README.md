<img src=".\app\assets\ReactNativeChallenge_Title.png" style="zoom: 67%;" />


---

[![supports iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff)](https://expo.io/@fedemartinez98/the-movies-app)
[![supports Android](https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff)](https://expo.io/@fedemartinez98/the-movies-app)

## About the App

This application was created in react native in order to carry out the moove it coding challenge. The objective of the challenge was to make a first version of an application whose main functionality was to be able to discover movies and find out about their reviews using a public API called The Movie Database (TMDb).


## The App Screens

<img src=".\app\assets\AppScreens.png" style="zoom: 50%;" />



## Architecture

The app was built to run on iOS and Android. It uses [Expo](https://expo.io/) as a core lib to build and distribute to both platforms.

### Libraries

- [react-navigation](https://github.com/react-navigation/react-navigation)
- [react-native-responsive-dimensions](https://github.com/react-native-toolkit/react-native-responsive-dimensions#readme)
- [react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage)
- [react-native-loading-spinner-overlay](https://github.com/joinspontaneous/react-native-loading-spinner-overlay)
- [expo](https://github.com/expo/expo)

### APIs

- [TMDb](https://developers.themoviedb.org/3/getting-started/introduction)

## Try it on your phone

You can download the app on [Expo app](https://expo.io/@fedemartinez98/the-movies-app) or scan the below QR code to open the project on Android and iOS if you already have the Expo app:

<img src=".\app\assets\qr.PNG" style="zoom: 50%;" />

In the case of IOS phones, you must be logged in to be able to use the app with this qr.

#### Download Expo on your phone
[![supports iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff)](https://itunes.com/apps/exponent)
[![supports Android](https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff)](https://play.google.com/store/apps/details?id=host.exp.exponent)

## Running locally

As others projects, you will need some requirements to run this application:

#### Requirements

- [Node.js](https://nodejs.org/) (latest)
- [Expo](https://expo.io/) (latest)
- [Yarn](https://yarnpkg.com/) (latest)

#### How to run

- `git clone https://github.com/fedemartinez98/MobileCodingChallenge`
- `yarn install`

Now, you can choose a command to run the project:

- `yarn ios` to run on iOS simulator
- `yarn android` to run on Android simulator
- `yarn start` to run on expo web and choose wich way you want to run it
- `yarn test` to check the tests made in the aplication source code



## How the app works

The application contains 4 screens which are **Home** (where all the movies are shown), **MovieDetails** (screen where the details of the selected movie are shown), **Reviews** (screen where all the reviews of the selected movie are shown) and finally **ReviewsDetails** (screen where the description of the previously selected review is shown)

The flow of the application corresponds to that one seen in the app pictures, first all the movies are shown where you can see the name of the movie, its release date and its score. Selecting a movie opens the movie details screen, where you can see the movie in more detail. On that same screen there is a button that indicates the option to see the reviews of the movie, when selected, the reviews screen opens and shows all the reviews registered in the TMDB API with a brief description of the user who wrote them. When selecting the review, a new screen opens where you can see in detail all the review made by the user.

All screens contain buttons to go back and in case of not having internet, the system will keep a copy of the data searched for 24 hours. 

## Aclarations

This application should and can improve, but for reasons of time and since it was a first version, it was understood that with the functionalities achieved, the product met the necessary requirements to be released to the public. Any recommendation will always be well received.

The app was specialy tested  on android and poorly tested on ios so any ios users feedback would come greate.

Test