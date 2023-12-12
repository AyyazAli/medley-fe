'use client'
import PageHeading from '@/components/page-heading/page-heading'
import { StyledTable, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TableWrapper } from '@/components/table/table'
import WidgetTitle from '@/components/widget-title/widget-title'
import StatusChip from '@/components/status-chip/StatusChip'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import { Loader } from '@/components/loader/Loader'
import Search from '@/components/search/Search'
import styled from 'styled-components'


interface tableType {
    dateAndTime: string,
    status: string,
    value: string,
    username: string
}

interface tableMetaDataType {
    page: number,
    limit: number,
    totalCount: number
}

const StyledSearchAndTitle = styled.div`
    display: flex;
`
export default function Payouts() {

    const [tableData, setTableData] = useState<tableType[] | null>(null);
    const [tableMetaData, setTableMetaData] = useState<tableMetaDataType>()
    const [loading, setLoading] = useState<Boolean>(true)
    const [currentPage, setCurrentPage] = useState(1);

    let pageCount = 0;
    const limit = 7;

    useEffect(() => {
        fetchTableData(1)
    }, [])

    useEffect(() => {
        if (tableMetaData?.totalCount && tableMetaData.limit)
            pageCount = tableMetaData?.totalCount / tableMetaData?.limit
    }, [tableMetaData])

    // useEffect(() => {
    //     fetchTableData(currentPage)
    // }, [currentPage])


    const handlePageClick = (event: any) => {
        // setCurrentPage(event.selected)
        fetchTableData(event.selected)
    }

    const fetchTableData = (selectedPage: number) => {
        setLoading(true);
        axios.get(`https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/payouts?page=${selectedPage}&limit=${limit}`).then((response) => {
            setTableData(response.data.data)
            setTableMetaData(response.data.metadata)
            setLoading(false)
        })
    }

    const onSearchClick = (searchTerm: string) => {
        setLoading(true);
        axios.get(`https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/search?query=${searchTerm}`).then(response => {
            setTableData(response.data)
            setLoading(false)
        })
    }
    return (
        <main>
            <PageHeading pageTitle="Payouts" />
            <Search onSearchClick={onSearchClick} />
            <WidgetTitle title="Payout History" />
            {loading ?
                <Loader /> :
                <TableWrapper>
                    <StyledTable>
                        <TableHead>
                            <TableRow>
                                <TableHeadCell>
                                    Username
                                </TableHeadCell>
                                <TableHeadCell>
                                    Date & Time
                                </TableHeadCell>
                                <TableHeadCell>
                                    Status
                                </TableHeadCell>
                                <TableHeadCell>
                                    Value
                                </TableHeadCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData && tableData?.map((item, index) => (
                                <TableRow tabIndex={index} key={index}>
                                    <TableCell>
                                        {item.username}
                                    </TableCell>
                                    <TableCell type='date'>
                                        {new Date(item.dateAndTime).toLocaleDateString('en-US', {
                                            weekday: 'short',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </TableCell>
                                    <TableCell>
                                        <StatusChip title={item.status} type={item.status} />
                                    </TableCell>
                                    <TableCell>
                                        {item.value}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </StyledTable>
                </TableWrapper>
            }
            <ReactPaginate
                pageCount={
                    tableMetaData?.totalCount && tableMetaData.limit ?
                        Math.trunc(tableMetaData?.totalCount / tableMetaData?.limit) + 1 : 0
                }
                pageRangeDisplayed={3}
                marginPagesDisplayed={3}
                onPageChange={handlePageClick} // Handle page change
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                activeClassName={'active'}
            />
        </main>
    )
}
