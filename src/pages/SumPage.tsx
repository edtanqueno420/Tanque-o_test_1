import { useMemo, useState } from "react";
import { Paper, TextField, Typography, Button } from "@mui/material";

export default function SumPage() {
  const [sueldoBase, setSueldoBase] = useState(0);
  const [primas, setPrimas] = useState(0);
  const [deducciones, setDeducciones] = useState(0);
  const sueldoNeto = useMemo(() => {
    return sueldoBase + primas - deducciones;
  }, [sueldoBase, primas, deducciones]);

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Calculadora de Sueldo Neto
      </Typography>

      <TextField
        label="Sueldo básico"
        type="number"
        value={sueldoBase}
        onChange={(e) => setSueldoBase(Number(e.target.value||0))}
        fullWidth
        sx={{ mb: 2 }}
      />

      <TextField
        label="Primas"
        type="number"
        value={primas}
        onChange={(e) => setPrimas(Number(e.target.value))}
        fullWidth
        sx={{ mb: 2 }}
      />

      <TextField
        label="Deducciones"
        type="number"
        value={deducciones}
        onChange={(e) => setDeducciones(Number(e.target.value))}
        fullWidth
        sx={{ mb: 2 }}
      />

      <Button variant="contained" color="success">
        Calcular
      </Button>

      <Typography sx={{ mt: 3, fontSize: 18 }}>
        Sueldo neto: <strong>${sueldoNeto.toFixed(2)}</strong>
      </Typography>
    </Paper>
  );
}
