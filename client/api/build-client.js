import axios from 'axios';

const buildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    //На сервере
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    //На клиенте
    return axios.create({
      baseURL: '/',
    });
  }
};

export default buildClient;
