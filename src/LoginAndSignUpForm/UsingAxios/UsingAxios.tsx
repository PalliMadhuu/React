import React, { FC } from 'react';
import './UsingAxios.css';
import axios from 'axios';
interface UsingAxiosProps {}
const API_ENDPOINT = 'http://localhost:3000/Users';
export  function getData(){
  axios.get('').then(response=>{console.log(response.data)})
  .catch(error=>console.log(error))
}

export function postData(data:any){
  axios.post('http://localhost:3000/Users',data).then(response=>{console.log(response.data)}).catch(error=>console.log(error))
}
 export const getDataByEmail = async (emailId:any) => {
  console.log('Method Called')
  try {
    console.log('Called');
    const response = await axios.get(`${API_ENDPOINT}?emailId=${emailId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
const UsingAxios: FC<UsingAxiosProps> = () => (
  <div className="UsingAxios" data-testid="UsingAxios">
    UsingAxios Component
  </div>
);

export default UsingAxios;
