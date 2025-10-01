import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // manipulacion del DOM para redirigir en el logueo

const LoginFace: React.FC = () => {
    const navigate = useNavigate();
    const webcamRef = useRef<Webcam>(null);
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const captureAndLogin = async () => {
    if (!password) {
        setStatus('Por favor ingresa tu contraseña');
        return;
    }

    setLoading(true);
    setStatus('Capturando y verificando rostro...');

    const screenshot = webcamRef.current?.getScreenshot();
    if (!screenshot) {
        setStatus('No se pudo capturar imagen');
        setLoading(false);
        return;
    }

    try {
        const blob = await fetch(screenshot).then(res => res.blob());
        const formData = new FormData();
        formData.append('password', password);
        formData.append('image', blob, 'login_face.jpg');

        const response = await axios.post('https://senasec.onrender.com/login-face/', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });

        const data = response.data;
        console.log('Respuesta backend:', data);

        // Ajusta según lo que retorna tu FastAPI (yo sugerí message + confidence)
        if (response.status === 200 && data.message) {
            setStatus('✅ Inicio de sesión exitoso');
            try {
                await axios.post('http://10.215.215.201/door/success');
                console.log('🚪 Señal enviada a la puerta correctamente');
            } catch (doorErr) {
                console.error('❌ Error al comunicar con la puerta:', doorErr);
            }
            
            localStorage.setItem('token', data.access || '');
            localStorage.setItem('currentUser', JSON.stringify(data.user || {}));
            navigate('/dashboard/inventory');
        } else {
            setStatus('❌ Rostro no coincide o no se entregó token');
        }
    } catch (err: any) {
        console.error(err);
        // Axios error handling
        if (axios.isAxiosError(err)) {
            const st = err.response?.status;
            if (st === 401) {
                setStatus('❌ Rostro no coincide');
            } else if (st === 404) {
                setStatus('❌ Usuario no encontrado');
            } else {
                setStatus('⚠️ Error en el servidor');
            }
        } else {
            setStatus('⚠️ Error en el servidor');
        }
    } finally {
        setLoading(false);
    }
};


    return (
        <div className="flex flex-col items-center space-y-4">
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={320}
                className="rounded shadow"
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border px-2 py-1 rounded w-64"
            />
            <button
                onClick={captureAndLogin}
                disabled={loading}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
            >
                {loading ? 'Verificando...' : 'Iniciar sesión con rostro'}
            </button>
            {status && <p className="text-sm text-gray-600">{status}</p>}
        </div>
    );
};

export default LoginFace;
