import React, {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {addSizeFilter, removeSizeFilter} from '../../store/actions/filterActions';

const SizeItem = props => {
	console.log('SizeItem');

	const [checked, setChecked] = useState(false);

	const dispatch = useDispatch();

	const handleCheck = () => {
		setChecked(!checked);
	};

	const isFirstRun = useRef(true);
	useEffect(() => {
		if (isFirstRun.current) {
			isFirstRun.current = false;
			return;
		}

		if (checked) {
			dispatch(addSizeFilter(props.item));
		} else {
			dispatch(removeSizeFilter(props.item));
		}
	}, [checked]);

	return (
		<span onClick={handleCheck} className={checked ? 'sizes__item sizes__item-checked' : 'sizes__item'}>
			{props.item}
		</span>
	);
};

export default SizeItem;
