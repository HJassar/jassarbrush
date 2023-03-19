import {
  Card,
  CardMedia,
  CardContent,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";

import type { NextPage } from "next";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import Layout from "../components/layout/Layout";
import useData from "../hooks/useData";
import LinkRouter from "../components/LinkRouter";

dayjs.extend(customParseFormat);

const News: NextPage = () => {
  const { data, loading } = useData("news", "all", {}, false);

  if (loading)
    return (
      <Layout>
        <Container
          sx={{
            minHeight: "95vh",
            pt: "80px",
          }}
        >
          <LinearProgress />
        </Container>
      </Layout>
    );

  return (
    <Layout>
      <Container
        sx={{
          minHeight: "95vh",
          pt: "80px",
        }}
      >
        {data?.filter((item: any) => item.fields.Published).length <= 0
          ? "There are no published news at the moment. Check back later."
          : data
              ?.filter((item: any) => item.fields.Published)
              .map((item: any, index: number) => (
                <Card
                  key={item.fields.id}
                  sx={{
                    display: "flex",
                    flexDirection: {
                      md: index % 2 === 0 ? "row" : "row-reverse",
                      xs: "column",
                    },
                    mb: 2,
                  }}
                >
                  {item.fields.Image?.length && (
                    <CardMedia
                      component="img"
                      sx={{ width: { md: 400 } }}
                      image={item.fields.Image[0].url}
                      alt={item.fields.Image[0].title}
                    />
                  )}
                  <CardContent>
                    <Typography component="div" variant="h5">
                      {item.fields.Headline}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {dayjs(item.fields.Date).format("MMM YYYY")}
                    </Typography>
                    <Typography component="p" variant="body1">
                      {item.fields.Excerpt}
                    </Typography>
                    <br />
                    <LinkRouter target="_blank" to={item.fields.URL}>
                      Click Here to See More
                    </LinkRouter>
                  </CardContent>
                </Card>
              ))}
      </Container>
    </Layout>
  );
};

export default News;
