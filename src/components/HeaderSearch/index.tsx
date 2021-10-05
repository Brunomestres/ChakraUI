/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { Box, Heading, Stack, Input } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
interface Props {
	setSearchStore: (search: string) => void;
}
const HeaderSearch = ({ setSearchStore  }: Props) => {
	const [search, setSearch] = useState("");
	useEffect(() => {
		setSearchStore(search);

	}, [search]);
	return (
		<Box
			w="85%"
			h="300px"
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
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</Stack>
		</Box>
	);
};

export default observer(HeaderSearch);
