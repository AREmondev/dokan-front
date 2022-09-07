export const API_URL =(url)=>{
  let absoluteUrl = 'https://dokan-api.herokuapp.com/api/' + url;
  return absoluteUrl;
}
export const token = (type) => {
  return type + ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTIwOTBkNjFhZTkyMjE2OWE5ZGE1ZCIsImlhdCI6MTY2MjU1MzA0NCwiZXhwIjoxNjY1MTQ1MDQ0fQ.2QcgZfUaleo33HzbkIMOGTfxVPMT8GVXuxTxiZ_v2JA'
}