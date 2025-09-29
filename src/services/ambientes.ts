import axios from 'axios';

const API_BASE = 'https://backend-senasec-usyv.onrender.com/ambiente/ambiente/'; // Ajusta si tu endpoint es distinto

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export interface Ambiente {
  id: number;
  nombre: string;
}

export const fetchAmbientes = async (): Promise<Ambiente[]> => {
  const response = await axios.get(API_BASE, {
    headers: getAuthHeaders()
  });
  return response.data;
};
