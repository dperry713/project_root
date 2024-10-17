import md5 from 'md5';

const config = {
  publicKey: '19736d4704c205617e9aed5b69bffddc',
  privateKey: '2f2ee7a697932ecbde8f7d84059e10a6f95c5838',
  baseUrl: 'https://gateway.marvel.com/v1/public'
};

export function getAuthParams() {
  const ts = new Date().getTime();
  const hash = md5(ts + config.privateKey + config.publicKey);
  return {
    ts: ts,
    apikey: config.publicKey,
    hash: hash
  };
}

export default config;
