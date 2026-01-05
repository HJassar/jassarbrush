import {
  Box,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";
import ReactMarkdown from 'react-markdown';

import useData from "../../hooks/useData";
import Layout from "../layout/Layout";
import LinkRouter from "../LinkRouter";
import { IAboutItem, IAboutCategory } from "../../data/about";

function groupByCategory(
  items: { fields: IAboutItem; id: any }[]
): IAboutCategory[] {
  const categoryMap = new Map<string, string[]>();

  items.forEach((item) => {
    const category = item.fields.Group || "Uncategorized";
    const existing = categoryMap.get(category) || [];
    existing.push(item.fields.Text);
    categoryMap.set(category, existing);
  });

  return Array.from(categoryMap.entries()).map(([category, list]) => ({
    category,
    list,
  }));
}

export default function Exhibs() {
  const { data: aboutData, loading } = useData("about", "all", {}, false);

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

  const categories = aboutData ? groupByCategory(aboutData) : [];

  return (
    <Box
      sx={{
        background: "#00000016",
        opacity: 1,
        transition: "opacity 1s ease-in-out",
      }}
    >
      <Container sx={{ p: 2, pt: 4 }}>
        {categories.map((cat: IAboutCategory, catIndex: number) => (
          <Box key={catIndex} mb={4}>
            <Typography
              variant="h5"
              component="h2"
              mb={3}
              textTransform="uppercase"
            >
              {cat.category}
            </Typography>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {cat.list.map((item: string, itemIndex: number) => (
                <li key={itemIndex} style={{ marginBottom: '0.5rem' }}>
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => (
                        <span style={{ whiteSpace: "pre-wrap" }}>
                          {children}
                        </span>
                      ),
                      a: ({ node, ...props }: any) => (
                        <LinkRouter
                          target="_blank"
                          to={props.href}
                          rel="noreferrer"
                        >
                          {props.children}
                        </LinkRouter>
                      ),
                    }}
                  >
                    {item}
                  </ReactMarkdown>
                </li>
              ))}
            </ul>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
