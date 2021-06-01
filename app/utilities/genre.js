import genre from '../data/generes.json';

export const convertToGenre = (arr) => {
  if (arr.length > 1) {
    let response = ""
    for(let i = 0; i < arr.length; i++){
      if ( i == arr.length - 1){
        response += genre[arr[i]].name;
      } else {
        response += genre[arr[i]].name + ", ";
      }
    }
    return response;
  }
  return arr.length !== 0 ? `${genre[arr[0]].name}` : '';
};