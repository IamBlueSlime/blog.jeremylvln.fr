/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const Container = styled.ul`
  list-style: none;
`;

const BioLink = styled.li`
  display: inline;

  &:not(:first-child) {
    margin-left: 5px;
  }

  &:not(:last-child) {
    margin-right: 5px;
  }
`;

const BioLinks = () => {
  const data = useStaticQuery(graphql`
    query BioLinksQuery {
      site {
        siteMetadata {
          social {
            twitter
            github
            linkedin
            mail
          }
        }
      }
    }
  `);

  return (
    <Container>
      <BioLink>
        <a
          href={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}
          rel="noreferrer"
          target="_blank"
        >
          twitter
        </a>
      </BioLink>
      •
      <BioLink>
        <a
          href={`https://github.com/${data.site.siteMetadata.social.github}`}
          rel="noreferrer"
          target="_blank"
        >
          github
        </a>
      </BioLink>
      •
      <BioLink>
        <a
          href={`https://linkedin.com/in/${data.site.siteMetadata.social.linkedin}`}
          rel="noreferrer"
          target="_blank"
        >
          linkedin
        </a>
      </BioLink>
      •
      <BioLink>
        <a
          href={`mailto:${data.site.siteMetadata.social.mail}`}
          rel="noreferrer"
          target="_blank"
        >
          mail
        </a>
      </BioLink>
    </Container>
  );
};

export default BioLinks;
