import { StyleSheet } from 'react-native';
import { white } from '../../utilities/colors';
import { getResponsiveFontSize, getResponsiveHeight, getResponsiveWidth, height, width } from '../../utilities/dimensions';

export default StyleSheet.create({
    firstContainer: {
        flex: 1,
        width: width,
        marginTop: getResponsiveHeight(10)
    },
    container: {
        flex: 1,
        width: width,
        height: height,
    },
    header: {
        marginLeft: getResponsiveWidth(7),
        marginBottom: 20,
        fontSize: 30,
        fontWeight: "bold"
    },
    moviecontainer: {
        width: width,
        marginBottom: getResponsiveHeight(6.5),

    },
    containerItem: {
        marginLeft: getResponsiveWidth(6),
        marginBottom: 20
    },
    poster: {
        borderRadius: 5,
        marginBottom: getResponsiveHeight(1),
        width: getResponsiveWidth(40),
        height: getResponsiveHeight(35)
    },
    date: {
        fontSize: getResponsiveFontSize(1.5),
        color: white
    },
    vote: {
        fontSize: getResponsiveFontSize(1.2),
        margin: 5,
        fontWeight: 'bold',
        color: white,
        alignContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: getResponsiveFontSize(1.5),
        fontWeight: 'bold',
        color: white,
        textTransform: 'uppercase'
    },
    linearGradient: {
        width: getResponsiveWidth(40),
        height: getResponsiveHeight(35),
        position: 'absolute',
        borderRadius: 5
    },
    linearGradientVote: {
        width: getResponsiveWidth(8),
        height: getResponsiveHeight(4),
        borderRadius: getResponsiveWidth(4.5),
        right: getResponsiveWidth(0.5),
        top: getResponsiveHeight(0.5),
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',

    },
    onTop: {
        left: getResponsiveWidth(2),
        right: 1,
        bottom: 15,
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: 'absolute',
    },
    onTopVote: {
        position: 'absolute',
        right: 10,
        top: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 10
    }
});