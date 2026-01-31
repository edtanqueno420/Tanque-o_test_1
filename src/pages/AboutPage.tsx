import { useState } from "react";
import { Paper, Typography, TextField, Button, MenuItem } from "@mui/material";

export default function AboutPage() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("Developer");

  const [mensaje, setMensaje] = useState("");

  const registrar = () => {
    setMensaje(`Registrado: ${nombre}, edad ${edad}, cargo ${cargo}`);
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Registro de Usuario
      </Typography>

      <TextField
        label="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />

      <TextField
        label="Edad"
        type="number"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />

      <TextField
        select
        label="Cargo"
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      >
        <MenuItem value="Developer">Developer</MenuItem>
        <MenuItem value="Designer">Designer</MenuItem>
        <MenuItem value="Tester">Tester</MenuItem>
      </TextField>

      <Button variant="contained" color="success" onClick={registrar}>
        Registrar
      </Button>

      {mensaje && (
        <Typography sx={{ mt: 2 }}>
          {mensaje}
        </Typography>
      )}
    </Paper>
  );
}
