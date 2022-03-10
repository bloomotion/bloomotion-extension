export async function getUser(email) {
  const res = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  });

  const data = await res.json();
  const { result } = data;

  return result;
}

export async function getEmotion(id, accessToken) {
  const res = await fetch(`http://localhost:3001/users/${id}/emotion`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      accessToken: accessToken,
    },
  });

  const data = await res.json();
  const { result } = data;

  return result;
}
