import { useMemo, useState } from "react";
import { Paper, TextField, Typography, Button, MenuItem } from "@mui/material";

export default function MultiplyPage() {
  const [sueldoDiario, setSueldoDiario] = useState(0);
  const [dias, setDias] = useState(5);

  const bono = useMemo(() => sueldoDiario * dias, [sueldoDiario, dias]);

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Bono Vacacional
      </Typography>

      <TextField
        label="Sueldo diario"
        type="number"
        value={sueldoDiario}
        onChange={(e) => setSueldoDiario(Number(e.target.value))}
        fullWidth
        sx={{ mb: 2 }}
      />

      <TextField
        select
        label="Días"
        value={dias}
        onChange={(e) => setDias(Number(e.target.value))}
        fullWidth
        sx={{ mb: 2 }}
      >
        <MenuItem value={5}>5 días</MenuItem>
        <MenuItem value={10}>10 días</MenuItem>
        <MenuItem value={15}>15 días</MenuItem>
      </TextField>

      <Button variant="contained" color="success">
        Calcular
      </Button>

      <Typography sx={{ mt: 3, fontSize: 18 }}>
        Bono vacacional: <strong>${bono.toFixed(2)}</strong>
      </Typography>
    </Paper>
  );
}
