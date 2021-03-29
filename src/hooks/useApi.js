import useApiCore from "../api/useApiCore";

const useAPI = () => {
  const { api } = useApiCore()

  const apiErrorMessage = (err, location) => {
      console.log(err,"errrrr");
    // const { status, data } = err.response
    console.log(`Response Error: (${location})\n-----------------------\n`, err.response)
    // if (status === 400) {
    //   alert(data.message)
    //     return
    // }
  }

  const signUpAPI=async( data , badRequestCallback )=>{
    return await api.post('signUp', data , false ).then((response)=>{
        return response
    }).catch((err)=>{
        badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'signUpAPI')
        return null
    })
  }
const questionAPI = async ( data , badRequestCallback ) => {
    return await api.post('questions',data,false) 
    .then ((response) => {return response})
    .catch ((err) => {
        badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'questionAPI')
        return null
    } ) 
}


//   const signInAPI = async (data, badRequestCallback) => {
//     console.log('data is:', data)
//     return await api.post('signIn', data, false).then((response ) => {
//       console.log('response', response)
//       return response.data.content
//     }).catch((err) => {
//       badRequestCallback && badRequestCallback(err)
//       apiErrorMessage(err, 'signInAPI')
//       return null
//     })
//   };

//   const console.loginApi=async(data :  , badRequestCallback)=>{
//     var bodyFormData = new FormData();
//     bodyFormData.append('username', data.username);
//     bodyFormData.append('password', data.password);
//     bodyFormData.append('client_id', 'web');
//     bodyFormData.append('client_secret', 'web');
//     bodyFormData.append('grant_type', 'password');
//     return await api.post('signIn',bodyFormData ,false).then((response)=>{
//       return response.data
//       // access_token scope
//     }).catch((err)=>{
//       console.log(err,'err catch')
//       badRequestCallback && badRequestCallback(err)
//       apiErrorMessage(err, 'signInAPI')
//       return null
//     })
//   }


//   const refreshTokenAPI = async (data , badRequestCallback) => {
//     console.log('data is:', data)
//     return await api.post('refreshToken', data, false).then((response ) => {
//       console.log('response', response)
//       return response.data.content
//     }).catch((err) => {
//       badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'refreshTokenAPI')
//       return null
//     })
//   };


//   const forgetPasswordAPI = async (data , badRequestCallback) => {
//     console.log('data is:', data)
//     return await api.post('forgetPassword', data, false).then((response ) => {
//       console.log('response', response)
//       return response.data.content
//     }).catch((err) => {
//       badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'forgetPasswordAPI')
//       return null
//     })
//   };


//   const tokenVerificationAPI = async (data , badRequestCallback) => {
//     console.log('data is:', data)
//     return await api.post('verify', data, false).then((response ) => {
//       console.log('response', response)
//       return response.data.content
//     }).catch((err) => {
//       badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'tokenVerificationAPI')
//       return null
//     })
//   };


//   const changePasswordAPI = async (data , badRequestCallback) => {
//     console.log('data is:', data)
//     return await api.put('changePassword', data, true).then((response) => {
//       console.log('response', response)
//       return response.data.content
//     }).catch((err) => {
//       badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'forgetPasswordAPI')
//       return null
//     })
//   };


//   const sendWithdrawAPI = async (data , badRequestCallback) => {
//     console.log('data is:', data)
//     return await api.post('withdrawals', data, true).then((response ) => {
//       console.log('response', response)
//       return response.data.content
//     }).catch((err) => {
//       badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'forgetPasswordAPI')
//       return null
//     })
//   };


//   const getWithdrawAPI = async (badRequestCallback) => {
//     return await api.get('withdrawals', null, true)
//       .then((response ) => {
//         console.log('response ', response)
//         return response.data.content
//       })
//       .catch((err) => {
//         badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'getUserProfileAPI')
//         return null
//       })
//   };


//   const getBalancesAPI = async (badRequestCallback) => {
//     return await api.get('balances', null, true)
//       .then((response ) => {
//         console.log('response ', response)
//         return response.data.content
//       })
//       .catch((err) => {
//         badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'getUserProfileAPI')
//         return null
//       })
//   };


//   const getPointsAPI = async (badRequestCallback) => {
//     return await api.get('points', null, true)
//       .then((response ) => {
//         console.log('response ', response)
//         return response.data.content
//       })
//       .catch((err) => {
//         badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'getPointsAPI')
//         return null
//       })
//   };


//   const getPhrasesAPI = async (type , response, badRequestCallback) => {
//     return await api.get('phrases', { type }, true)
//       .then((response ) => {
//         console.log('response ', response)
//         return response.data.content
//       })
//       .catch((err) => {
//         badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'getPointsAPI')
//         return null
//       })
//   };


//   const getUserProfileAPI = async (badRequestCallback) => {
//     return await api.get('profile', null, true)
//       .then((response ) => {
//         console.log('response ', response)
//         const { email, avatar, mobile, country, full_name, referral_code, referral_url } = response.data.content
//         return {
//           email,
//           avatar,
//           mobile,
//           country,
//           fullName: full_name,
//           referralCode: referral_code,
//           referralUrl: referral_url,
//         }
//       })
//       .catch((err) => {
//         badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'getUserProfileAPI')
//         return null
//       })
//   };


//   const getTotalBalancesAPI = async (badRequestCallback) => {
//     return await api.get('totalBalances', null, true)
//       .then((response ) => {
//         console.log(response.data.content)
//         return response.data.content
//       })
//       .catch((err) => {
//         badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'getTotalBalancesAPI')
//         return null
//       })
//   };


//   const getTotalPointsAPI = async (badRequestCallback) => {
//     return await api.get('totalPoints', null, true)
//       .then((response ) => {
//         console.log(response.data.content)
//         return response.data.content
//       })
//       .catch((err) => {
//         badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'getTotalPointsAPI')
//         return null
//       })
//   };


//   const getNotificationsAPI = async (limit?: number, offset?: number, badRequestCallback) => {
//     return await api.get('notifications', { limit, offset }, true)
//       .then((response ) => {
//         console.log('response ', response)
//         return response.data.content
//       })
//       .catch((err) => {
//         badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'getNotificationsAPI')
//         return null
//       })
//   };


//   const getPaymentsAPI = async (limit?: number, offset?: number, badRequestCallback) => {
//     return await api.get('payments', { limit, offset }, true)
//       .then((response ) => {
//         console.log('response ', response)
//         return response.data.content
//       })
//       .catch((err) => {
//         badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'getNotificationsAPI')
//         return null
//       })
//   };


//   const getPlansAPI = async (limit?: number, offset?: number, badRequestCallback) => {
//     return await api.get('plans', { limit, offset }, true)
//       .then((response ) => {
//         console.log('response ', response)
//         return response.data.content
//       })
//       .catch((err) => {
//         badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'getNotificationsAPI')
//         return null
//       })
//   };


//   const totalReferralsAPI = async (badRequestCallback) => {
//     return await api.get('totalReferrals', {}, true)
//       .then((response ) => {
//         console.log('response ', response)
//         return response.data.content
//       })
//       .catch((err) => {
//         badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'getNotificationsAPI')
//         return null
//       })
//   };


//   const updateUserProfileAPI = async (data UserStates | , badRequestCallback) => {
//     return await api.patch('profile', data, true)
//       .then((response ) => {
//         const { email, avatar, mobile, country, full_name, referral_code, referral_url } = response.data.content
//         return {
//           email,
//           avatar,
//           mobile,
//           country,
//           fullName: full_name,
//           referralCode: referral_code,
//           referralUrl: referral_url,
//         }
//       })
//       .catch((err) => {
//         badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'updateUserProfileAPI')
//         return null
//       })
//   };


//   const getCountriesAPI = async (limit?: number, offset?: number, badRequestCallback) => {
//     return await api.get('countries', { limit, offset }, false)
//       .then((response ) => {
//         return response.data.content
//       })
//       .catch((err) => {
//         badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'getCountriesAPI')
//         return null
//       })
//   };


  return {
    signUpAPI ,
    questionAPI
  };
};

export default useAPI;