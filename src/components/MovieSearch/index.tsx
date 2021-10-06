import React from "react";
import { observer } from "mobx-react-lite";
import { Flex, Image, Heading } from "@chakra-ui/react";
import { MovieResult } from "../../interfaces/movie";
interface Props {
	moviesSearch: MovieResult[];
}
const MovieSearch = ({ moviesSearch }: Props) => (
	<Flex flexDirection="column" width="85%" m="auto">
		{moviesSearch.map((e) => (
			<Flex backgroundColor="beige" mt="15px" key={e.id} borderRadius="5px">
				<Image
					width="10%"
					borderRadius="15px"
					src={`https://image.tmdb.org/t/p/w300/${e.poster_path}`}
					alt={e.title}
				/>
				<Heading as="h2" size="xl" color="black">
					{e.title}
				</Heading>
			</Flex>
		))}
	</Flex>
);

export default observer(MovieSearch);
