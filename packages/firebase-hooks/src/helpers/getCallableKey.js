import hasOwnProperty from './hasOwnProperty';

const getCallableKey = (obj, ...keys) => keys.find((k) => hasOwnProperty(obj, k));

export default getCallableKey;
