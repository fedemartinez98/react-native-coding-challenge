import { StyleSheet } from 'react-native';
import { getResponsiveFontSize, getResponsiveHeight, getResponsiveWidth, width } from '../../utilities/dimensions';
import { black} from '../../utilities/colors';

export default StyleSheet.create({
    containerItem: {
        flex: 1,
        width : width,
        flexDirection: 'row',
        marginBottom: getResponsiveHeight(1), 
        marginLeft: getResponsiveWidth(4),
        marginRight: getResponsiveWidth(20), 
    },
    item: {
        marginLeft: getResponsiveWidth(3),
        flexDirection: 'column',
        marginBottom: getResponsiveHeight(2),
    },
    poster: {
        width: getResponsiveWidth(13),
        height: getResponsiveHeight(7),
        borderRadius: 30,
        paddingLeft: 5
    },
    title: {
        fontSize: getResponsiveFontSize(2.0),
        fontWeight: 'bold',
        fontWeight: 'bold', color: black, textTransform: 'uppercase'
    },
    overview: {
        fontSize: getResponsiveFontSize(1.5),
        marginRight: getResponsiveWidth(22.5), 
        textAlign: 'justify'
    },
});