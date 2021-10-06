import React from "react";
import { observer } from "mobx-react-lite";
import {
	Paginator,
	Container,
	Previous,
	Next,
	PageGroup,
} from "chakra-paginator";
interface Props {
	totalPages: number;
	page: number;
	setPage: (page: number) => void;
}
const PaginatorMovie = ({ totalPages, page, setPage }: Props) => (
	<Paginator
		pagesQuantity={totalPages}
		currentPage={page}
		onPageChange={(e) => setPage(e)}
		outerLimit={2}
		innerLimit={3}
	>
		<Container
			align="center"
			margin="auto"
			justify="space-between"
			w="40%"
			p={4}
		>
			<Previous mr="2%" fontSize="small">
        Anterior
			</Previous>
			<PageGroup isInline align="center" />
			<Next ml="2%" fontSize="small">
        Próximo
			</Next>
		</Container>
	</Paginator>
);

export default observer(PaginatorMovie);
