export const url = 'http://localhost:8000'
export const post = (table, body) => {
  return fetch(`${url}/${table}`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  }).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw response.statusText
    }
  })
}

export const get = (table, id = '') => {
  return fetch(`${url}/${table}${id}`, {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8'
    }
  }).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw response.statusText
    }
  })
}

export const remove = (table, id) => {
  return fetch(`${url}/${table}/${id}`, {
    method: 'delete',
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw response.statusText
    }
  })
}