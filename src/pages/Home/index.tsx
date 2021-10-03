/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Box, Heading, Stack, Input } from "@chakra-ui/react";
import { MovieStore } from "../../stores/movieStore";
import { Movie } from "../../interfaces/movie";
const Home = () => {
	const movieStore = useLocalObservable(() => new MovieStore());
	const [movie, setMovie] = useState<Movie>();
	useEffect(() => {
		setMovie(movieStore.moviesTrending);
		console.log(movie);
	}, []);
	return (
		<>
			<Box
				w="85%"
				bg="tomato"
				h="350px"
				bgGradient="linear(to-l, #1EBBFA, #1235F5)"
				borderRadius="3px"
				m="auto"
			>
				<Box ml="15px">
					<Heading as="h1" size="2xl" color="whiteAlpha.800">
          Bem-Vindo(a).
					</Heading>
					<Heading as="h2" size="lg" color="whiteAlpha.900">
          Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.
					</Heading>
				</Box>
				<Stack mt="50px" ml="15px" w="65%">
					<Input
						borderRadius="full"
						backgroundColor="white"
						placeholder="Busque seu filme"
						size="lg"
					/>
				</Stack>
			</Box>
			<div>
				{movie?.results.map((e) => (
					<p key={e.id}>{e.title}</p>
				))}
			</div>
		</>
	);
};

export default observer(Home);
