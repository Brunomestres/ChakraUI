import React from "react";
import { observer } from "mobx-react-lite";
import { Box, Heading, Flex } from "@chakra-ui/react";
import { MovieResult } from "../../interfaces/movie";
import  CardMovieTrending from "../CardMovieTrending";
interface Props {
	movieTrending: MovieResult[];
}
const MovieTrending = ({ movieTrending }: Props) => (
	<Box w="85%" m="auto" border="1px solid gray" borderRadius="10px">
		<Heading ml="1%" as="h2" size="xl" color="black">
      Os Mais Populares:
		</Heading>
		<Flex flexWrap="wrap">
			{movieTrending.map((e) => (
				<CardMovieTrending key={e.id} movie={e} />
			))}
		</Flex>
	</Box>
);

export default observer(MovieTrending);
