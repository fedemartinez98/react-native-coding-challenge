import { StyleSheet } from 'react-native';
import { white } from '../../utilities/colors';
import { getResponsiveFontSize, getResponsiveHeight, getResponsiveWidth, height, width } from '../../utilities/dimensions';

export default StyleSheet.create({
    fullcontainer: {
      flex: 1,
      width: width
    },
    container: {
      flex: 1,
      marginTop: getResponsiveHeight(14),
      width: width,
      backgroundColor: white,
    },
    reviewsTitle : {
      marginLeft: getResponsiveWidth(6),
      marginBottom: getResponsiveHeight(1),
      marginTop: getResponsiveHeight(2.5),
      fontSize: getResponsiveFontSize(2.5),
    },
    reviewsText: {
      fontWeight: 'bold',
    },
    containerMessage: {
      flex: 1,
      marginTop: getResponsiveHeight(12),
      backgroundColor: white,
    },
    warning: {
      marginTop: getResponsiveHeight(4),
      marginLeft: getResponsiveWidth(6),
      fontSize: getResponsiveFontSize(2),
      fontWeight: 'bold',
    },
    button: {
      marginLeft: getResponsiveWidth(6),
      marginRight: getResponsiveWidth(6),
      marginBottom: getResponsiveHeight(10),
      marginTop: getResponsiveHeight(5),
    },
    image: {
      width: getResponsiveWidth(25),
      height: getResponsiveHeight(18),
      top: getResponsiveHeight(5),
      left: getResponsiveWidth(68),
      position: 'absolute',
      zIndex: 1,
      borderRadius: 5
    },
    scrollView: {
      marginTop: getResponsiveHeight(5)
    }
  })