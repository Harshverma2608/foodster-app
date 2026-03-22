const API_BASE_URL = "http://localhost:3000";

async function parseJson(response) {
  return response.json().catch(() => ({}));
}

export async function loginUser({ email, password }) {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await parseJson(response);

  return {
    ok: response.ok,
    status: response.status,
    data,
  };
}

export async function signupUser({ email, password }) {
  const response = await fetch(`${API_BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await parseJson(response);

  return {
    ok: response.ok,
    status: response.status,
    data,
  };
}
