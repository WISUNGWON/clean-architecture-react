// Movie를 그려주는 컴포넌트
import React from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from '../../domain/entity/IMovie';
import styled from 'styled-components';

export const Movie: React.FC<IMovie> = ({
  id,
  year,
  title,
  summary,
  medium_cover_image,
  genres,
}) => {
  return (
    <Wrapper className={'movie'}>
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            medium_cover_image,
            genres,
          },
        }}
      >
        <img
          className="movie__img"
          src={medium_cover_image}
          alt={title}
          title={title}
        />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & {
    background-color: white;
    margin-bottom: 70px;
    font-weight: 300;
    padding: 20px;
    border-radius: 5px;
    color: #adaeb9;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }

  a {
    display: grid;
    grid-template-columns: minmax(150px, 1fr) 2fr;
    grid-gap: 20px;
    text-decoration: none;
    color: inherit;
  }

  .movie__img {
    position: relative;
    top: -50px;
    max-width: 150px;
    width: 100%;
    margin-right: 30px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
  }

  .movie__title,
  .movie__year {
    margin: 0;
    font-weight: 300;
  }

  .movie__title {
    margin-bottom: 5px;
    font-size: 24px;
    color: #2c2c2c;
  }

  .movie__genres {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    margin: 5px 0px;
  }

  .movie__genres li,
  .movie__year {
    margin-right: 10px;
    font-size: 14px;
  }
`;
