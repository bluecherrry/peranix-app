//@ts-nocheck
import { KEYS } from '../common/constants/index';
import { AsyncStorage } from 'AsyncStorage';
import axios from 'axios';
export const PROTOCOL = 'https://';
export const BASE_URL = 'react-project-317b3-default-rtdb.firebaseio.com/';
export const TOKEN_PREFIX = 'Bearer';
export const URL = `${PROTOCOL}${BASE_URL}`;
export const END_POINTS = {
    signUp: 'register.json/',
    questions:'questions.json/'
};

const useApiCore = () => {
    const getAuthToken = async () => {
        const tokens = await AsyncStorage.getItem(KEYS.STORAGE.TOKENS);
        if (tokens) {
            let tokensObject = JSON.parse(tokens);
            return `${TOKEN_PREFIX} ${tokensObject.access}`;
        } else {
            return '';
        }
    };
    const fetchUrl = async (options, onUploadProgress) => {
        return new Promise((resolve, reject) => {
            axios
                .request({
                    ...options,
                    baseURL: URL,
                    headers: {
                        ...options.headers,
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                    validateStatus: status => {
                        if (status < 500) {
                            if (status >= 200 && status < 400) {
                                return true;
                            } else if (status === 401 || status === 403) {
                                AsyncStorage.clear().finally(() => {}); // restart app in this place
                            } else if (status === 404) {
                                // alert.show({
                                //     iconName: 'warning',
                                //     desc: strings.serverNotFound,
                                //     cancelable: true,
                                //     buttonTitle: strings.close,
                                //     onButtonPressed: () => {
                                //         alert.hidden();
                                //     },
                                // });
                            } else if (status === 400) {
                                console.log('Status request 400')
                            } else {
                                // alert.show({
                                //     desc: strings.anUnknownErrorOccurred,
                                //     cancelable: true,
                                //     buttonTitle: strings.close,
                                //     onButtonPressed: () => {
                                //         // alert.hidden();
                                //     },
                                // });
                            }
                        } else {
                            // Save({ unreachable: true }, 'app');
                            // alert.show({
                            //     desc: strings.unableToFetchDataFromServer,
                            //     iconName: 'warning',
                            //     cancelable: false,
                            //     buttonTitle: strings.retry,
                            //     onButtonPressed: () => {
                            //         // RNRestart.Restart();
                            //         // restart app in this place
                                
                            //     },
                            // });
                        }
                        return false;
                    },
                    timeout: 15000,
                    onUploadProgress: progress => {
                        if (onUploadProgress) {
                            onUploadProgress(progress);
                        }
                    },
                })
                .then(res => resolve(res))
                .catch(err => reject(err));
        });
    };
    const api = {
        get: async (endPoint , params, authorization = false) => {
            let options = { method: 'GET', url : END_POINTS[endPoint] , params };
            if (authorization) {
                options = {
                    ...options,
                    headers: {
                        Authorization: await getAuthToken(),
                    },
                };
            }
            return fetchUrl(options);
        },
        post: async (
            endPoint ,
            data,
            authorization = false,
            onUploadProgress,
        ) => {
            let options = { method: 'POST', url : END_POINTS[endPoint] , data };
            if (authorization) {
                options = {
                    ...options,
                    headers: {
                        Authorization: await getAuthToken(),
                    },
                };
            }
            return fetchUrl(options, onUploadProgress);
        },
        put: async (
            endPoint ,
            data,
            authorization = false,
            onUploadProgress,
        ) => {
            let options = { method: 'PUT', url : END_POINTS[endPoint] , data };
            if (authorization) {
                options = {
                    ...options,
                    headers: {
                        Authorization: await getAuthToken(),
                    },
                };
            }
            return fetchUrl(options, onUploadProgress);
        },
        patch: async (
            endPoint,
            data,
            authorization = false,
            onUploadProgress,
        ) => {
            let options = { method: 'PATCH', url : END_POINTS[endPoint] , data };
            if (authorization) {
                options = {
                    ...options,
                    headers: {
                        Authorization: await getAuthToken(),
                    },
                };
            }
            return fetchUrl(options, onUploadProgress);
        },
    };

    return {
        getAuthToken,
        fetchUrl,
        api,
    };
};

export default useApiCore;