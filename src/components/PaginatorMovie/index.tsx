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
		outerLimit={3}
		innerLimit={5}
	>
		<Container align="center" justify="space-between" w="50%" p={4}>
			<Previous>Anterior</Previous>
			<PageGroup isInline align="center" />
			<Next>Próximo</Next>
		</Container>
	</Paginator>
);

export default observer(PaginatorMovie);
