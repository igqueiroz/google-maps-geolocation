/* 
Get Buscapé Items
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
*/
import axios from 'axios';

const GetList = {
  getCoords(link) {
  	return axios.get(`http://freegeoip.net/json/${link}`);
  }
};
  
export default GetList;