export const API_URL =(url)=>{
  let absoluteUrl = 'http://localhost:8000/api/' + url;
  return absoluteUrl;
}
export const token = (type) => {
  return type + ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTIwOTBkNjFhZTkyMjE2OWE5ZGE1ZCIsImlhdCI6MTY2MTU3MzI1MiwiZXhwIjoxNjY0MTY1MjUyfQ.feiClVA2eIKc9yrNEBuS_d-MCrdiOwSBIsq5j3PPMvI'
}