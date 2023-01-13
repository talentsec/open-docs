import React, { Fragment } from 'react'

export default {
  logo: <span>Talentsec 公开文档</span>,
  project: {
    link: 'https://github.com/shuding/nextra',
  },
  toc: {
    extraContent: <Fragment />,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – TalenctSec',
    }
  },
  project: {
    link: 'https://github.com/talentsec/open-docs',
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href='https://talentsec.cn' target='_blank'>
          TalentSec
        </a>
        .
      </span>
    ),
  },
  docsRepositoryBase: 'https://github.com/talentsec/open-doc/tree/main',
}
