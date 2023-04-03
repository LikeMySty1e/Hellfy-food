import React from 'react';
import PropTypes from 'prop-types';
import Input from "../Input";
import './style.css';
import ListItem from "./components/ListItem";

const Autocomplete = props => {
    const {
        data,
        selected,
        message,
        label,
        placeholder,
        warning,
        error,
        onSelect
    } = props;
    const [query, setQuery] = React.useState(selected?.text || ``);
    // const [isFocused, setIsFocused] = React.useState(false);
    const [isListShowed, setIsListShowed] = React.useState(false);

    const queriedItems = React.useMemo(() => {
        if (!query) {
            return [];
        }

        const filteredData = data.filter(item => item.text
            .substring(0, query.length)
            .toUpperCase()
            .includes(`${query.toUpperCase()}`));

        if (!filteredData.length) {
            return [{ text: `Ничего не найдено`, value: null }];
        }

        return filteredData;
    }, [query, data]);

    React.useEffect(() => setIsListShowed(!!queriedItems.length), [queriedItems]);

    const onItemSelect = value => {
        setQuery(``);

        onSelect && onSelect(value);
    };

    return <div className="autocomplete__container">
            <Input
                label={label}
                error={error}
                message={message}
                warning={warning}
                placeholder={placeholder}
                onChange={value => setQuery(value)}
                // onBlur={() => setIsFocused(false)}
                // onFocus={() => setIsFocused(true)}
                value={query}
            />
        {isListShowed && <div className="autocomplete__list">
            {queriedItems.map(item => <ListItem {...item} onSelect={onItemSelect} />)}
        </div>}
        </div>;
};

Autocomplete.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        value: PropTypes.number
    })),
    selected: PropTypes.number,
    onSelect: PropTypes.func,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    warning: PropTypes.bool,
    message: PropTypes.string,
    error: PropTypes.bool,
    classname: PropTypes.string,
    placeholder: PropTypes.string
};

export default Autocomplete;