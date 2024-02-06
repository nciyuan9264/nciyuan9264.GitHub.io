// import { useState } from 'react';

// import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import { products } from 'src/_mock/products';

// import ProductCard from '../product-card';
// import ProductSort from '../product-sort';
// import ProductFilters from '../product-filters';
// import ProductCartWidget from '../product-cart-widget';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import './katex.min.css';
import markdownContent from './test.md';
// const markdownContent = `
// # 文章

// 这是一段包含 **LaTeX** 公式的 Markdown 文本：

// \`E=mc^2\`
// $S_{1,j}$
// 你可以在这里编写你的文章内容。

// - 列表项 1
// - 列表项 2
// - 列表项 3
// `;

// ----------------------------------------------------------------------

export default function ProductsView() {
  // const [openFilter, setOpenFilter] = useState(false);

  // const handleOpenFilter = () => {
  //   setOpenFilter(true);
  // };

  // const handleCloseFilter = () => {
  //   setOpenFilter(false);
  // };
  const code = ({ node, inline, className, children=[], ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, '')}
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          showLineNumbers
          lineNumberStyle={{ color: 'rgba(255, 255, 255, 0.5)', minWidth: '2em', paddingRight: '1em' }}
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
  };
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        文章
      </Typography>

      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{code}}
      >
        {markdownContent}
      </ReactMarkdown>

      {/* <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />

          <ProductSort />
        </Stack>
      </Stack> */}

      {/* <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid> */}

      {/* <ProductCartWidget /> */}
    </Container>
  );
}
