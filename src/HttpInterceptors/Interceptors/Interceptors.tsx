import axios from 'axios';
export const axiosInstace=axios.create(
  {
    baseURL: 'https://api.openweathermap.org/data/2.5',
  }
)
axiosInstace.interceptors.request.use(
 config=> {
       window.alert('Request Interceptor Called');
              return config;
  }
);

axiosInstace.interceptors.response.use(
  response => {
    window.alert('response Interceptor Called')

    if(response.status===200)
    {
      window.alert('successfull')
    }
    return response;
  },
  error => {
    console.error(error);
    return Promise.reject(error);
  }
);







