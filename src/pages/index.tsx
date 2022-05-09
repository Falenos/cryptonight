import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../components/Link";

export default function Page() {
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          my: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography component='h1' color='primary'>
          Material UI v5 with Next.js in TypeScript
        </Typography>
        <Typography component='h2' color='secondary'>
          Boilerplate for building faster.
        </Typography>
        <Link href='/about' color='primary'>
          Go to the about page
        </Link>
      </Box>
    </Container>
  );
}

export const getServerSideProps = () => {
  return { props: {} };
};
