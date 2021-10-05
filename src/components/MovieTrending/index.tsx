import React from "react";
import { observer } from "mobx-react-lite";
import { Box, Heading, Flex, Image } from "@chakra-ui/react";
import { MovieResult } from "../../interfaces/movie";
interface Props {
	movieTrending: MovieResult[];
}
const MovieTrending = ({ movieTrending }: Props) => (
	<Box w="85%" h="350px" m="auto">
		<Heading as="h2" size="xl" color="black">
      Os Mais Populares:
		</Heading>
		<Flex flexWrap="wrap">
			{movieTrending.map((e) => (
				<Box flexDirection="column" m="7px" w="10%" key={e.id}>
					<Image
						borderRadius="15px"
						src={`https://image.tmdb.org/t/p/w300/${e.poster_path}`}
						alt={e.title}
					/>
					<Heading as="h1" size="xs" color="black">
						{e.title}
					</Heading>
				</Box>
			))}
		</Flex>
	</Box>
);

export default observer(MovieTrending);
