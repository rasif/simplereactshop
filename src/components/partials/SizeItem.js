import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addSizeFilter, removeSizeFilter} from '../../store/actions/filterActions';

const SizeItem = props => {
	console.log('SizeItem');

	const [checked, setChecked] = useState(false);

	const dispatch = useDispatch();

	const handleCheck = () => {
		if (checked) {
			dispatch(removeSizeFilter(props.item));
		} else {
			dispatch(addSizeFilter(props.item));
		}

		setChecked(!checked);
	};

	return (
		<span onClick={handleCheck} className={`sizes__item ${checked && 'sizes__item-checked'}`}>
			{props.item}
		</span>
	);
};

export default SizeItem;
