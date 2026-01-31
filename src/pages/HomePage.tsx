import { Box, Paper, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box>
      <Paper
        sx={{
          p: { xs: 3, md: 6 },
          borderRadius: 3,
          bgcolor: "#f1f3f5",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 300,
            lineHeight: 1.1,
            mb: 2,
          }}
        >
          Bienvenido a Mi App!
        </Typography>

        <Typography color="text.secondary" sx={{ fontSize: 18 }}>
          Aplicación de ejemplo usando Bootstrap que simula un frontend para migrar
          a React + Ant Design.
        </Typography>
      </Paper>
      <Box
        sx={{
          mt: 4,
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 1,
        }}
      >
        <Box
          component="img"
          src="https://elcrackdeportes.com/wp-content/uploads/2026/01/Sin-titulo-1200-x-800-px-2026-01-27T090031.739.png"
          alt="Portada"
          sx={{
            width: "100%",
            height: { xs: 220, sm: 320, md: 420 },
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap" }}>
        <Paper sx={{ p: 2, flex: 1, minWidth: 200 }}>
          <Typography fontWeight={700}>Usuarios</Typography>
        </Paper>

        <Paper sx={{ p: 2, flex: 1, minWidth: 200 }}>
          <Typography fontWeight={700}>Cálculo de Sueldos</Typography>
        </Paper>

        <Paper sx={{ p: 2, flex: 1, minWidth: 200 }}>
          <Typography fontWeight={700}>Registro Rápido</Typography>
        </Paper>
      </Box>

      <Paper sx={{ mt: 3, p: 2, bgcolor: "#d1e7dd", color: "#0f5132" }}>
        Bienvenido al sistema de usuarios y nómina.
      </Paper>

      <Paper sx={{ mt: 2, p: 2, bgcolor: "#cff4fc", color: "#055160" }}>
        Recuerda completar todos los campos antes de calcular.
      </Paper>
    </Box>
  );
}
