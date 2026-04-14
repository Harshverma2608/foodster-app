import { httpClient } from "./httpClient";

function normalizeResponse(response) {
  return {
    ok: true,
    status: response.status,
    data: response.data,
  };
}

function normalizeError(error) {
  if (error.response) {
    return {
      ok: false,
      status: error.response.status,
      data: error.response.data,
    };
  }

  throw error;
}

export async function request(config) {
  try {
    const response = await httpClient.request(config);
    return normalizeResponse(response);
  } catch (error) {
    return normalizeError(error);
  }
}

export async function get(url, config = {}) {
  return request({ ...config, method: "get", url });
}

export async function post(url, data, config = {}) {
  return request({ ...config, method: "post", url, data });
}

export async function put(url, data, config = {}) {
  return request({ ...config, method: "put", url, data });
}

export async function patch(url, data, config = {}) {
  return request({ ...config, method: "patch", url, data });
}

export async function remove(url, config = {}) {
  return request({ ...config, method: "delete", url });
}
