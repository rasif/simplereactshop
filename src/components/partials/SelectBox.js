import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setOrderFilter} from '../../store/actions/filterActions';

const SelectBox = () => {
	console.log('Select');

	const [isOpened, setIsOpened] = useState(false);
	const [selected, setSelected] = useState('Select');

	const dispatch = useDispatch();

	const handleOpen = () => {
		setIsOpened(!isOpened);
	};

	const handleSelect = e => {
		if (e.target.classList.contains('select__item')) {
			dispatch(setOrderFilter(e.target.innerText));
			setSelected(e.target.innerText);
			setIsOpened(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', e => {
			if (!e.target.closest('.select')) {
				setIsOpened(false);
			}
		});
	}, []);

	const render = () => {
		return (
			<div className='main__select select'>
				<p className='select__text' onClick={handleOpen}>
					{selected}
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
