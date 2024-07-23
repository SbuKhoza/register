import React from 'react';

function Results({ results }) {
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
