import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSortFilter} from '../../store/actions/filterActions';
import {selectSortFilter} from '../../store/selectors';

const SelectBox = () => {
	console.log('Select');

	const [isOpened, setIsOpened] = useState(false);
	const sortFilter = useSelector(selectSortFilter);

	const dispatch = useDispatch();

	const clickOutsideRef = useRef();

	clickOutsideRef.current = e => {
		if (!e.target.closest('.select') && isOpened) {
			setIsOpened(false);
		}
	};

	const handleOpen = () => {
		setIsOpened(!isOpened);
	};

	const handleSelect = e => {
		dispatch(setSortFilter(e.target.innerText));
		setIsOpened(false);
	};

	const handleClickOutside = e => {
		clickOutsideRef.current(e);
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);

		return () => document.removeEventListener('click', handleClickOutside);
	}, []);

	const render = () => {
		return (
			<div className='main__select select'>
				<p className='select__text' onClick={handleOpen}>
					{sortFilter}
				</p>
				{isOpened && (
					<div className='select__block' onClick={handleSelect}>
						<p className='select__item'>Select</p>
						<p className='select__item'>Highest to lowest</p>
						<p className='select__item'>Lowest to highest</p>
					</div>
				)}
			</div>
		);
	};

	return render();
};

export default SelectBox;
