import React from "react";
import { observer } from "mobx-react-lite";
import { Box, Heading, Image } from "@chakra-ui/react";
import { MovieResult } from "../../interfaces/movie";
interface Props {
	movie: MovieResult;
}
const CardMovieTrending = ({ movie }: Props) => (
	<Box
		flexDirection="column"
		width={{ base: "9%", xl: "8%" }}
		marginLeft="2.8%"
		marginBottom="10px"
	>
		<Image
			borderRadius="15px"
			src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
			alt={movie.title}
		/>
		<Heading as="h1" fontSize="small" color="black">
			{movie.title}
		</Heading>
	</Box>
);

export default observer(CardMovieTrending);
