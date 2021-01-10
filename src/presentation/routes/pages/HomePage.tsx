import React, { useState, useEffect } from 'react';
import { Application } from '../../../application';
import { IMovie } from '../../../domain/entity/IMovie';
import { Movie } from '../../components/Movie';
import styled from 'styled-components';

interface IHomePageProps {}
export const HomePage: React.FC<IHomePageProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<IMovie[]>([]);

  const getAllMovies = () => {
    (async () => {
      try {
        const movieResponse = await Application.repositories.movie.getAllMovies();
        console.log(movieResponse);
        setMovies(movieResponse);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <Wrapper>
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                medium_cover_image={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .loader {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
  }

  .movies {
    display: grid;
    grid-template-columns: repeat(2, minmax(400px, 1fr));
    grid-gap: 100px;
    padding: 50px;
    width: 80%;
    padding-top: 70px;
  }

  @media screen and (max-width: 1090px) {
    .movies {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }
`;
