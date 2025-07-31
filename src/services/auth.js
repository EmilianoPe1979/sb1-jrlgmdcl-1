import api from "./api";

export const login = async (username, password) => {
  // Usar URLSearchParams en lugar de FormData para enviar como application/x-www-form-urlencoded
  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);

  const response = await api.post("/token", formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  localStorage.setItem("token", response.data.access_token);
  return response.data;
};

export const register = async (userData) => {
  return await api.post("/api/users/", userData);
};

export const getCurrentUser = async () => {
  return await api.get("/api/users/me");
};
