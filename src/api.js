const BASE_URL = "https://slicehub-1.onrender.com/api";

export const registerUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const loginUser = async (credentials) => {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

export const fetchPizzas = async () => {
  const response = await fetch(`${BASE_URL}/pizzas`);
  if (!response.ok) {
    throw new Error("Failed to fetch pizzas");
  }
  return response.json();
};
