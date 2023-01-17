import React, { Fragment } from 'react'

export default {
  logo: <span>Talentsec 开放文档</span>,
  toc: {
    extraContent: <Fragment />,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – TalenctSec',
    }
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href='https://talentsec.cn' target='_blank'>
          TalentSec
        </a>
        .
      </span>
    ),
  },
  docsRepositoryBase: 'https://github.com/talentsec/open-doc/tree/main',
}
