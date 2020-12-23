import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RenderIf, Tabset, Pagination, Spinner } from 'react-rainbow-components';
import ResultItems from './resultItems';
import Tabs from './tabs';
import { ResultsContainer, ResultsContent, Content } from './styled';

const HITS_PER_PAGE = 20;

const getPageHits = ({ activePage, hits }) => {
    const lastItem = activePage * HITS_PER_PAGE;
    const firstItem = lastItem - HITS_PER_PAGE;
    return hits.slice(firstItem, lastItem);
};

const getInitialActiveTab = (results) => {
    const entities = Object.keys(results);
    if (entities.length > 0) {
        return entities[0];
    }
    return undefined;
};

export default function Results(props) {
    const { results, isLoading, query, onSearch, onSelect } = props;
    const [activeTab, setActiveResultTab] = useState(() => getInitialActiveTab(results));
    const { totalPages, page: activePage, hits = [], icon } =
        (activeTab && results[activeTab]) || {};
    const showPagination = totalPages > 1;

    useEffect(() => {
        if (results && !activeTab) {
            setActiveResultTab(getInitialActiveTab(results));
        }
    }, [results, activeTab]);

    const hasPagination = typeof totalPages === 'number' && typeof activePage === 'number';
    const showInternalPagination = !hasPagination && hits.length > HITS_PER_PAGE;
    const [internalActivePage, setInternalActivePage] = useState(1);
    const internalPages = Math.ceil(hits.length / HITS_PER_PAGE);

    const hitsToShow = showInternalPagination
        ? getPageHits({ activePage: internalActivePage, hits })
        : hits;

    const handlePaginationChange = (event, page) => {
        onSearch({ query, page });
    };

    const handleInternalPaginationChange = (event, page) => {
        setInternalActivePage(page);
    };

    const handleTabChange = (e, selected) => {
        setActiveResultTab(selected);
        setInternalActivePage(1);
        onSearch({ query, page: 1 });
    };

    return (
        <ResultsContainer>
            <Tabset variant="line" activeTabName={activeTab} onSelect={handleTabChange}>
                <Tabs results={results} />
            </Tabset>
            <Content>
                <ResultsContent role="presentation">
                    <RenderIf isTrue={isLoading}>
                        <Spinner />
                    </RenderIf>
                    <RenderIf isTrue={!isLoading}>
                        <ResultItems
                            icon={icon}
                            hits={hitsToShow}
                            onSelect={onSelect}
                            query={query}
                        />
                        <RenderIf isTrue={showPagination}>
                            <Pagination
                                pages={totalPages}
                                activePage={activePage}
                                onChange={handlePaginationChange}
                            />
                        </RenderIf>
                        <RenderIf isTrue={showInternalPagination}>
                            <Pagination
                                pages={internalPages}
                                activePage={internalActivePage}
                                onChange={handleInternalPaginationChange}
                            />
                        </RenderIf>
                    </RenderIf>
                </ResultsContent>
            </Content>
        </ResultsContainer>
    );
}

Results.propTypes = {
    results: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    query: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
};
