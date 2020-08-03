/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

import BioLinks from './bio-links';
import { rhythm } from '../utils/typography';

const BioDescription = styled.p`
  margin-bottom: 5px;
`;

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          social {
            twitter
          }
        }
      }
    }
  `);

  const age = new Date().getFullYear() - 1999;

  return (
    <div
      style={{
        display: 'flex',
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt="Jérémy Levilain profile"
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: '100%',
        }}
        imgStyle={{
          borderRadius: '50%',
        }}
      />
      <BioDescription>
        My name is
        {' '}
        <a
          href={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}
          rel="noreferrer"
          target="_blank"
        >
          Jérémy Levilain
        </a>
        .
        {' '}
        {age}
        y. Software developer.
        <br />
        This is my blog, I write about code and stuff.
      </BioDescription>
    </div>
  );
};

export default Bio;
