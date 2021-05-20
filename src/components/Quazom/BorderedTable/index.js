import React from 'react'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
} from '@coreui/react'

import usersData from 'src/components/users/UsersData';

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}
const fields = ['name', 'registered', 'role', 'status']

const BorderedTable = () => {
    return (
        <>
            <CCard className="p-3 custom-table custom-simple">
                <CCardBody>
                    <CDataTable
                        items={usersData}
                        fields={fields}
                        bordered
                        itemsPerPage={5}
                        pagination
                        scopedSlots={{
                            'status':
                                (item) => (
                                    <td>
                                        <CBadge color={getBadge(item.status)}>
                                            {item.status}
                                        </CBadge>
                                    </td>
                                )
                        }}
                    />
                </CCardBody>
            </CCard>
        </>
    )
}

export default BorderedTable;
