import axios from 'axios';
import md5 from 'md5';

const publicKey = 'c8e8ac7dadc1595d175525ccfa65f68c';
// const publicKey = '1234';
const privatKey = '032377cef92553d724acb89349fad8a9449d44af';
// const privatKey = 'abcd';
const timestamp = new Date().toISOString();
// const timestamp = '1';

const resultMD5 = md5(`${timestamp}${privatKey}${publicKey}`);
// ts+privateKey+publicKey

const HTTPClient = axios.create({
  baseURL: 'https://gateway.marvel.com:443/',
  params: {
    apikey: publicKey,
    ts: timestamp,
    hash: resultMD5,
  },
});

HTTPClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const HTTPRequest = (options) => {
  return HTTPClient.request({
    ...options,
    // paramsSerializer: (params) => {
    //   return qs.stringify(params, {
    //     arrayFormat: 'comma',
    //     encode: false,
    //   });
    // },
  });
};
