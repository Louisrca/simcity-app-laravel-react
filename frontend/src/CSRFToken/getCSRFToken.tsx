export async function getCSRFToken(): Promise<string> {
  const response = await fetch("http://127.0.0.1:8000/api/csrf-token", {
    method: "GET",
    mode: "cors",
    headers: new Headers({
      Accept: "application/json",
      "Content-type": "application/json; charset=UTF-8",
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch CSRF token.");
  }

  const data: { csrfToken: string } = await response.json();
  return data.csrfToken;
}
