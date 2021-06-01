import { StyleSheet } from 'react-native';
import { black, white } from "../../utilities/colors";
import { getResponsiveHeight, getResponsiveWidth, getResponsiveFontSize } from "../../utilities/dimensions";

export default StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    buttonContainer : { 
        flexDirection: 'row', 
        marginLeft: getResponsiveWidth(3), 
        marginTop: getResponsiveHeight(3) 
    },
    backbuttonReviews: { 
        tintColor: black, 
        width: getResponsiveWidth(5), 
        height: getResponsiveHeight(3.5), 
        marginLeft: getResponsiveWidth(1) 
    },
    backbuttonMovie: { 
        tintColor: white, 
        width: getResponsiveWidth(5), 
        height: getResponsiveHeight(3.5), 
        marginLeft: getResponsiveWidth(1) 
    },
    textWhite: { 
        color: black, 
        marginLeft: getResponsiveWidth(1), 
        fontSize: getResponsiveFontSize(2.3) 
    },
    textBlack: { 
        color: white, 
        marginLeft: getResponsiveWidth(1), 
        fontSize: getResponsiveFontSize(2.3) 
    },
});