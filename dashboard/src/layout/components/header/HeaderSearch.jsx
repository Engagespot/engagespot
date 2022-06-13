import React, { useState, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { createAutocomplete } from '@algolia/autocomplete-core';

import { Input } from 'antd';
import { RiSearchLine } from 'react-icons/ri';

import pagesJson from './search-data/algolia-pages.json';

export default function HeaderSearch(props) {
  const [autocompleteState, setAutocompleteState] = useState({});

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        onStateChange({ state }) {
          setAutocompleteState(state);
        },
        getSources() {
          return [
            {
              sourceId: 'pages-source',
              getItemInputValue({ item }) {
                return item.query;
              },
              getItems({ query }) {
                if (!query) {
                  return pagesJson;
                }
                return pagesJson.filter(item =>
                  item.title.toLowerCase().includes(query.toLowerCase())
                );
              },
              getItemUrl({ item }) {
                return item.url;
              },
              templates: {
                item({ item }) {
                  return item.title;
                },
              },
            },
          ];
        },
      }),
    []
  );

  function linkHandleClick() {
    autocompleteState.query = '';
    props.setSearchHeader(false);
  }

  return (
    <div {...autocomplete.getRootProps({})}>
      <Input
        {...props.inputFocusProp}
        {...autocomplete.getInputProps({})}
        placeholder="Search..."
        prefix={
          <RiSearchLine className="site-form-item-icon da-text-color-black-80 da-text-color-dark-20" />
        }
      />

      <div
        className="da-header-search-result"
        {...autocomplete.getPanelProps({})}
      >
        {autocompleteState.isOpen &&
          autocompleteState.collections.map((collection, index) => {
            const { source, items } = collection;

            return (
              items.length > 0 && (
                <ul key={index} {...autocomplete.getListProps()}>
                  {items.map(
                    (item, index) =>
                      index < 4 && (
                        <li
                          key={index}
                          {...autocomplete.getItemProps({
                            item,
                            source,
                          })}
                          className="da-font-weight-500"
                        >
                          <Link to={item.url} onClick={linkHandleClick}>
                            {item.title}
                          </Link>
                        </li>
                      )
                  )}
                </ul>
              )
            );
          })}
      </div>
    </div>
  );
}
