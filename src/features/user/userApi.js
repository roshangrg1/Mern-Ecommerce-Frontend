export function fetchLoggedInUserOrder(userId){
  return new Promise (async (resolve)=>{
    const response = await fetch('http://localhost:8080/orders/?user.id='+userId)
    const data = await response.json()
    resolve({data})
  })
}

// update user also should have been there

export function fetchLoggedInUser(userId){
  return new Promise (async (resolve)=>{
    const response = await fetch('http://localhost:8080/users/'+userId)
    const data = await response.json()
    resolve({data})
  })
}

export function updateUser(update) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/users/'+update.id,{
      method:'PATCH',
      body: JSON.stringify(update),
      headers: {'content-type':'application/json'}
    }) 
    const data = await response.json()
    // TODO: on server it will only returnsome info of user (not a password)
    resolve({data})
  }
  );
}