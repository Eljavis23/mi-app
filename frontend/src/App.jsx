import { useState } from 'react';
import api from './api';

function App() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');
    try {
      const res = await api.post('/api/usuarios', { nombre, email, password });
      setMensaje(`✅ Usuario creado: ${res.data.nombre}`);
      setNombre('');
      setEmail('');
      setPassword('');
    } catch (error) {
      setMensaje(`❌ ${error.response?.data?.error || 'Error de conexión'}`);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h1>Registro de Usuarios</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }}
        />
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Registrarse
        </button>
      </form>
      {mensaje && <p style={{ marginTop: 20 }}>{mensaje}</p>}
    </div>
  );
}

export default App;