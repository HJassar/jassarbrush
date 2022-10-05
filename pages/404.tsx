import { Container } from "@mui/system";
import Layout from "../components/layout/Layout";

export default function NotFound() {
  return (
    <Layout>
      <Container
        sx={{
          minHeight: "95vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>404 | Page Not Found</h1>
      </Container>
    </Layout>
  );
}
