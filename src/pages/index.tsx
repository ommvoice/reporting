import TestComponent from '@/components/TestComponent';
import Grid from '@mui/material/Grid';

const Dashboard = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <TestComponent />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
