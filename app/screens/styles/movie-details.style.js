import { StyleSheet } from 'react-native';
import { getResponsiveFontSize, getResponsiveHeight, getResponsiveWidth, height, width } from '../../utilities/dimensions';
import { black, white, brown } from '../../utilities/colors';

export default StyleSheet.create({
    container: { 
        flex: 1, 
        width: width
    },
    topContainer: { 
        width: width, 
        height: height
    },
    image: { 
        width: getResponsiveWidth(30), 
        height: getResponsiveHeight(25), 
        top: getResponsiveHeight(25), 
        left: getResponsiveWidth(5), 
        borderRadius: 5,
        position: 'absolute', zIndex: 1, 
    },
    trailer: { 
        width: width, 
        height: getResponsiveHeight(35)
    },
    linearGradientPoster: { 
        width: width, 
        height: getResponsiveHeight(35), 
        position: 'absolute'
    },
    linearGradientTrailer: { 
        width: getResponsiveWidth(12), 
        height: getResponsiveHeight(6),
        top: getResponsiveHeight(12), 
        left: getResponsiveWidth(45),  
        position: 'absolute', 
        zIndex: 3, 
        borderRadius: 25 
    },
    playButton: {
        width: getResponsiveWidth(6.2), 
        height: getResponsiveHeight(3.3), 
        top: getResponsiveHeight(1.4), 
        left: getResponsiveWidth(3), 
        position: 'absolute', 
        zIndex: 12,
        tintColor: white, 
    },
    titleContainer: { 
        width: getResponsiveWidth(52), 
        height: getResponsiveHeight(10), 
        top: getResponsiveHeight(23), 
        left: getResponsiveWidth(40), 
        position: 'absolute', zIndex: 2, 
        alignContent: 'flex-end', justifyContent: 'flex-end' 
    },
    title: { 
        fontSize: getResponsiveFontSize(2), 
        color: white, 
        textTransform: 'uppercase', fontWeight: 'bold', 
    },
    info: { 
        width: getResponsiveWidth(52), 
        height: getResponsiveHeight(5), 
        top: getResponsiveHeight(36), 
        left: getResponsiveWidth(40),
        position: 'absolute', 
    },
    popularity: { 
        fontSize: getResponsiveFontSize(1.7) ,
        fontWeight: 'bold', 
        color: black, 
    },
    infoText: {
        color: black, 
        fontSize: getResponsiveFontSize(1.8)
    },
    rating: { 
        color: brown, 
        fontSize: getResponsiveFontSize(2.5), 
        fontWeight: 'bold'
    },
    ratingStars: { 
        fontSize: getResponsiveFontSize(1.5),
        textAlignVertical: 'top', 
        justifyContent: 'flex-start' 
    },
    bottomContainer: { 
        marginLeft: 15, 
        marginRight: 15, 
        position: 'absolute', 
        top: getResponsiveHeight(54) 
    },
    desc: { 
        color: black, 
        fontSize: getResponsiveFontSize(2), 
        marginBottom: getResponsiveHeight(3),
        textAlign: 'justify', 
        margin: 10, 
    },
    btnContainer: { 
        marginTop: getResponsiveHeight(3), 
        alignContent: 'center', 
        justifyContent: 'flex-start' 
    },
    reviewsButton: { 
        position: 'absolute', 
        top: getResponsiveHeight(1.6), 
        left: getResponsiveWidth(12), 
        zIndex: 12, 
        color: white, 
        fontSize: getResponsiveFontSize(2), 
        fontWeight: 'bold' 
    },
    linearGradientReviews: { 
        width: getResponsiveWidth(50), 
        height: getResponsiveHeight(6), 
        left: getResponsiveWidth(21), 
        position: 'absolute',  
        borderRadius: 20 
    },
});