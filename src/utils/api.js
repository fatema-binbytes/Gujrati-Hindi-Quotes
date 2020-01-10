import HTTPStatus from 'http-status';

const CONTENT_TYPE_JSON = 'application/json';
const CONTENT_TYPE_TEXT = 'text/plain';
const CONTENT_TYPE = 'Content-Type';

export async function POST(url, body = null, token = null, status = null) {
  let headers;

  if (token === null) {
    headers = {
      Accept: CONTENT_TYPE_JSON,
      'Content-Type': CONTENT_TYPE_JSON,
    };
  } else {
    headers = {
      Accept: CONTENT_TYPE_JSON,
      'Content-Type': CONTENT_TYPE_JSON,
      Authorization: 'Bearer ' + token,
    };
  }

  if (body != null) {
    body = JSON.stringify({...body});
  }
  console.log(url, body);
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body,
  });

  if (res.headers.get(CONTENT_TYPE).startsWith(CONTENT_TYPE_JSON)) {
    const json = await res.json();
    console.log(json);
    if (res.status === (status === null ? HTTPStatus.OK : status)) {
      return {success: true, response: json};
    } else {
      return {success: false, msg: json.error};
    }
  } else {
    if (res.status === (status === null ? HTTPStatus.OK : status)) {
      return {success: true, response: res.body};
    } else {
      return {success: false, msg: res.body};
    }
  }
}

export async function GET(url, token = null, status = null) {
  let headers;
  if (token === null) {
    headers = {};
  } else {
    headers = {
      Accept: CONTENT_TYPE_JSON,
      'Content-Type': CONTENT_TYPE_JSON,
      Authorization: 'Bearer ' + token,
    };
  }
console.log(url)
  const res = await fetch(url, {
    method: 'GET',
    headers,
  });

  if (res.headers.get(CONTENT_TYPE).startsWith(CONTENT_TYPE_JSON)) {
    const json = await res.json();
    if (res.status === (status === null ? HTTPStatus.OK : status)) {
      return {success: true, response: json};
    } else {
      return {success: false, msg: json.error};
    }
  } else {
    if (res.status === (status === null ? HTTPStatus.OK : status)) {
      return {success: true, response: res.body};
    } else {
      return {success: false, msg: res.body};
    }
  }
}

export async function PUT(url, body = null, token = null, status = null) {
  let headers;

  if (token === null) {
    headers = {
      'Content-Type': CONTENT_TYPE_JSON,
    };
  } else {
    headers = {
      'Content-Type': CONTENT_TYPE_JSON,
      Authorization: 'Bearer ' + token,
    };
  }

  if (body != null) {
    body = JSON.stringify({...body});
  }

  console.log('data', body);
  const res = await fetch(url, {
    method: 'PUT',
    headers,
    body,
  });

  if (res.headers.get(CONTENT_TYPE).startsWith(CONTENT_TYPE_JSON)) {
    const json = await res.json();

    console.log('res >>> ', json);

    if (res.status === (status === null ? HTTPStatus.OK : status)) {
      return {success: true, ...json};
    } else {
      return {success: false, msg: json.error};
    }
  } else if (res.headers.get(CONTENT_TYPE).startsWith(CONTENT_TYPE_TEXT)) {
    if (res.status === (status === null ? HTTPStatus.OK : status)) {
      return {success: true, ...res.body};
    } else {
      return {success: false, response: res.body};
    }
  } else {
    console.log(res);
  }
}

export async function DELETE(url, token = null, status = null) {
  console.log(url);
  let headers;

  if (token === null) {
    headers = {};
  } else {
    headers = {
      Authorization: 'Bearer ' + token,
    };
  }

  const res = await fetch(url, {
    method: 'DELETE',
    headers,
  });
  if (res.headers.get(CONTENT_TYPE).startsWith(CONTENT_TYPE_JSON)) {
    const json = await res.json();
    if (res.status === (status === null ? HTTPStatus.OK : status)) {
      return {success: true, msg: json};
    } else {
      return {success: false, msg: json.error};
    }
  } else {
    if (res.status === (status === null ? HTTPStatus.OK : status)) {
      return {success: true, response: res.body};
    } else {
      return {success: false, response: res.body};
    }
  }
}
