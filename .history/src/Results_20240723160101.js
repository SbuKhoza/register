import React from 'react';
import { useLocation } from 'react-router-dom';

function Results() {
    const location = useLocation();
    const { results } = location.state || { results: [] };

    return (
        <div className='search-results'>
            {results.length > 0 ? (
                <ul>
                    {results.map(emp => (
                        <li key={emp.id}>{emp.fname} {emp.lname} (ID: {emp.id})</li>
                    ))}
                </ul>
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
}

export default Results;
