import React from "react";
import { observer } from "mobx-react-lite";
import { Heading } from "@chakra-ui/react";
const TitleMovieTrending = () => (
	<Heading ml="2.8%" mb="2%" mt="1%" as="h2" size="xl" color="black">
    Os Mais Populares:
	</Heading>
);

export default observer(TitleMovieTrending);
