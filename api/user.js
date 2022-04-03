export async function getUser(email) {
  try {
    const res = await fetch("https://api.bloomotions.com/login", {
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
  } catch (err) {
    throw new Error(err);
  }
}

export async function getEmotion(id, accessToken) {
  try {
    const res = await fetch(`https://api.bloomotions.com/users/${id}/emotion`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accessToken: accessToken,
      },
    });

    const data = await res.json();
    const { result } = data;

    return result;
  } catch (err) {
    throw new Error(err);
  }
}
