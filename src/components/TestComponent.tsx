import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const TestComponent = () => {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Button size="small" variant="contained">
          View Sales
        </Button>
        <Typography variant="h2">Demo Text</Typography>
      </CardContent>
    </Card>
  );
};

export default TestComponent;
