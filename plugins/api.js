export const API_URL =(url)=>{
  let absoluteUrl = 'https://dokan-api.herokuapp.com/api/' + url;
  // let absoluteUrl = 'http://localhost:8000/api/' + url;
  return absoluteUrl;
}
