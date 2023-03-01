import React from 'react';

import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

//materialUI
import { Typography, Box } from '@mui/material';

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b>{text}</b>,
    [MARKS.ITALIC]: (text) => <i>{text}</i>,
    [MARKS.CODE]: (text) => <code>{text}</code>,
  },

  renderNode: {
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <a
        style={{ textDecoration: 'none', color: 'gold' }}
        target="_blank"
        href={data.uri}
      >
        {children}
      </a>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <Box mt={3}>
        <Typography variant="h1">{children}</Typography>
      </Box>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <Box mt={3}>
        <Typography variant="h2">{children}</Typography>
      </Box>
    ),

    [BLOCKS.HEADING_3]: (node, children) => (
      <Box mt={3}>
        <Typography variant="h3">{children}</Typography>
      </Box>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <Box mt={3}>
        <Typography variant="h4">{children}</Typography>
      </Box>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <Box mt={3}>
        <Typography variant="h5">{children}</Typography>
      </Box>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <Box mt={3}>
        <Typography variant="h6">{children}</Typography>
      </Box>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Box
        textAlign="justify"
        mt={2}
        lineHeight={{ xs: 1.5 }}
        fontSize={{ xs: '1rem', md: '1.2rem' }}
      >
        {children}
      </Box>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <Typography variant="subtitle1">{children}</Typography>
    ),
  },
};

const ContentfulBody = ({ body }) => {
  return <div>{body && renderRichText(body, options)}</div>;
};

export default ContentfulBody;
