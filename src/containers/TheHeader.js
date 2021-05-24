import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderNav,
  CBreadcrumbRouter
} from '@coreui/react';


import routes from 'src/routes';

import {
  TheHeaderDropdown,
  TheHeaderDropdownNotif,
} from './index';

import TheTitles from './TheTitles';

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({ type: 'set', sidebarShow: val })
  }

  return (
    <CHeader withSubheader fixed={false} className="flex-wrap">
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />

      <CHeaderNav className="d-md-down-none mr-auto">
        <TheTitles />
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <TheHeaderDropdownNotif />
        <TheHeaderDropdown />
      </CHeaderNav>
      <CBreadcrumbRouter routes={routes} className="w-100"/>
    </CHeader>

  )
}

export default TheHeader
