import React from "react";
import { observer } from "mobx-react-lite";
import { Flex, Box, Image } from "@chakra-ui/react";
import { MovieResult } from "../../interfaces/movie";
interface Props {
	moviesSearch: MovieResult[];
}
const MovieSearch = ({ moviesSearch }: Props) => {
	console.log(moviesSearch);
	return (
		<Flex flexDirection="column">
			{moviesSearch.map((e) => (
				<Box backgroundColor="aquamarine" mt="15px" key={e.id}>
					{e.original_title}

					<Image
						borderRadius="15px"
						src={`https://image.tmdb.org/t/p/w300/${e.poster_path}`}
						alt={e.title}
					/>
				</Box>
			))}
		</Flex>
	);
};

export default observer(MovieSearch);
