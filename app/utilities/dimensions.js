import { responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';
import { Dimensions} from 'react-native';
  
  export const getResponsiveHeight = (value) => responsiveHeight(value);
  
  export const getResponsiveWidth = (value) => responsiveWidth(value);
  
  export const getResponsiveFontSize = (value) => responsiveFontSize(value);

  export const {width} = Dimensions.get('window');

  export const {height} = Dimensions.get('window');