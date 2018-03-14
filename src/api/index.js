/* eslint-disable */
export function logIn(email, password) {
  // ... hit an API endpoint somehow
  // and assume we get back a list of errors
  const errors = [
    'Error Message 1',
    'Error Message 2',
    // ... could be any nuber of errors
  ]

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(errors)
    }, 1000)
  })
}

export default logIn
