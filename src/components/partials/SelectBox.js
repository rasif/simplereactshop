import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setOrderFilter} from '../../store/actions/filterActions';

const SelectBox = () => {
	console.log('Select');

	const dispatch = useDispatch();
	const [isOpened, setIsOpened] = useState(false);
	const orderFilter = useSelector(state => state.filter.orderFilter);
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
		dispatch(setOrderFilter(e.target.innerText));
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
					{orderFilter}
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
