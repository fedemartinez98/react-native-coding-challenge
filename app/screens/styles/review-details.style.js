import { StyleSheet } from 'react-native';
import { getResponsiveFontSize, getResponsiveHeight, width } from '../../utilities/dimensions';
import { black, white } from '../../utilities/colors';


export default StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        marginTop: getResponsiveHeight(12),
        backgroundColor: white,
    },
    title: {
        marginTop: getResponsiveHeight(2),
        marginBottom: getResponsiveHeight(1),
        fontSize: getResponsiveFontSize(4),
        fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase',
        color: black, 
    },
    overview: {
        fontSize: getResponsiveFontSize(1.8),
        marginBottom: 100,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 10,
        textAlign: 'justify',
    }
});