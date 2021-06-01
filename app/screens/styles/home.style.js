import { StyleSheet } from 'react-native';
import { width, getResponsiveHeight} from '../../utilities/dimensions';

export default StyleSheet.create({
    container: {
      flex: 1,
      width: width,
      marginTop: getResponsiveHeight(10)
    },
  })