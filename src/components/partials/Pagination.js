import React, {useEffect, useRef} from 'react';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to, step = 1) => {
	const array = [];

	for (let i = from; i <= to; i += step) {
		array.push(i);
	}

	return array;
};

const fetchPageNumbers = (totalPages, currentPage, pageNeighbours) => {
	const totalNumbers = pageNeighbours * 2 + 3;
	const totalBlocks = totalNumbers + 2;

	if (totalPages > totalBlocks) {
		const startPage = Math.max(2, currentPage - pageNeighbours);
		const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

		let pages = range(startPage, endPage);

		const hasLeftSpill = startPage > 2;
		const hasRightSpill = totalPages - endPage > 1;
		const spillOffset = totalNumbers - (pages.length + 1);

		switch (true) {
			case hasLeftSpill && !hasRightSpill: {
				const extraPages = range(startPage - spillOffset, startPage - 1);
				pages = [LEFT_PAGE, ...extraPages, ...pages];
				break;
			}

			case !hasLeftSpill && hasRightSpill: {
				const extraPages = range(endPage + 1, endPage + spillOffset);
				pages = [...pages, ...extraPages, RIGHT_PAGE];
				break;
			}

			case hasLeftSpill && hasRightSpill:
			default: {
				pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
				break;
			}
		}

		return [1, ...pages, totalPages];
	}

	return range(1, totalPages);
};

const Pagination = ({currentPage, countOfProducts, postsPerPage = 2, pageNeighbours = 2, handlePaginate}) => {
	console.log('Pagination');

	const countOfPages = Math.ceil(countOfProducts / postsPerPage);

	const changePagesRef = useRef();
	changePagesRef.current = e => {
		if (e.keyCode === 39 && currentPage < countOfPages) {
			handlePaginate(currentPage + 1);
		} else if (e.keyCode === 37 && currentPage > 1) {
			handlePaginate(currentPage - 1);
		}
	};

	const pageNumbers = fetchPageNumbers(countOfPages, currentPage, pageNeighbours);

	const onChangePageKeyDown = e => changePagesRef.current(e);

	useEffect(() => {
		document.addEventListener('keydown', onChangePageKeyDown);

		return () => document.removeEventListener('keydown', onChangePageKeyDown);
	}, []);

	const onChangePage = e => {
		if (e.target.classList.contains('pagination__item')) {
			handlePaginate(Number(e.target.innerText));
		}
	};

	const onDecreasePage = e => {
		e.stopPropagation();

		handlePaginate(currentPage - pageNeighbours - 1);
	};

	const onIncreasePage = e => {
		e.stopPropagation();

		handlePaginate(currentPage + pageNeighbours + 1);
	};

	if (countOfPages <= 1) {
		return null;
	}

	return (
		<div className='pagination'>
			<ul className='pagination__list' onClick={onChangePage}>
				{pageNumbers.map(page => {
					if (page === LEFT_PAGE) {
						return (
							<li class='pagination__item' onClick={onDecreasePage}>
								<i class='fas fa-angle-left'></i>
							</li>
						);
					}

					if (page === RIGHT_PAGE) {
						return (
							<li class='pagination__item' onClick={onIncreasePage}>
								<i class='fas fa-angle-right'></i>
							</li>
						);
					}

					return (
						<li className={`pagination__item ${page === currentPage ? 'pagination__item-current' : ''}`}>
							{page}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Pagination;
