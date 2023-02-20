import React from 'react'
import { Fragment } from 'react';

// function Echo({children}){
//     return  children;
// }


function Table({ data, config, keyFn }) {
    const renderedRows = data.map((rowData) => {

        const renderedCells = config.map((column)=>{


            return <td className = "p-2" key = {column.label}>{column.render(rowData)}</td>
        });
        return (
 

            <tr className='border-b' key={keyFn(rowData)}>
                {renderedCells}    
            </tr>
        )
    })

    const renderedRowHeaders = config.map((labels) => {


        if(labels.header)
        return <Fragment key = {labels.label}>{labels.header()}</Fragment>;

       
        return (
            <th key={labels.label}>{labels.label}</th>
        )
    })

    return (
        <table className='table-auto border-spacing-2'>
            <thead>
                <tr className='border-b-2'>
                    {renderedRowHeaders}

                </tr>

            </thead>
            <tbody>
                {renderedRows}

            </tbody>
        </table>
    )
}

export default Table