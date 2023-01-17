import React, { Fragment } from 'react'

export default {
  // logo: <span>指纹社区平台</span>,
  logo: (
    <>
      <img
        src='https://user-images.githubusercontent.com/20656708/212898420-42c8989b-0cd7-4a01-bc9f-b26b76313f89.svg'
        alt='logo'
      />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>指纹社区平台</span>
    </>
  ),
  toc: {
    extraContent: <Fragment />,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – TalentSec',
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
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className='cursor-default'>{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 2,
    toggleButton: true,
  },
  editLink: {
    text: '',
  },
  feedback: {
    content: '',
  },
  docsRepositoryBase: 'https://github.com/talentsec/open-doc/tree/main',
}
