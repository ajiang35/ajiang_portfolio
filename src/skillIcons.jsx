export const renderSkillIcon = (skill) => {
  const baseProps = {
    viewBox: '0 0 24 24',
    width: 18,
    height: 18,
    'aria-hidden': true,
    focusable: 'false',
  }

  const defaultIcon = (
    <svg {...baseProps}>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#94A3B8" />
      <circle cx="12" cy="12" r="4" fill="#fff" />
    </svg>
  )

  switch (skill) {
    case 'JavaScript':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#F7DF1E" />
          <path d="M7 18.5V5.5h10v13M10.5 8.5h5.5v2h-3v2h2.5v2H10.5v-2.5h2.5V10.5H10.5V8.5Z" fill="#1F1F1F" />
        </svg>
      )
    case 'TypeScript':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
          <path d="M9 8.5h6.5v2.2H12v7.3H9.8v-7.3H9V8.5Zm5.8 0h3.3v2.2h-1.1v7.3h-2.1V10.7h-1.1V8.5Z" fill="#fff" />
        </svg>
      )
    case 'Python':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#3776AB" />
          <path d="M9 7c-2.2 0-2.8 1.2-2.8 2.8v2.2c0 1.5.7 2.8 2.8 2.8h1.5v-1.9H9.1c-.8 0-1.2-.4-1.2-1.1V9.8c0-.7.4-1.1 1.2-1.1h1.2V7H9Zm5.5 0v1.6h1.1c.8 0 1.2.4 1.2 1.1v2.2c0 .7-.4 1.1-1.2 1.1h-1.1v1.9h1.5c2.2 0 2.8-1.3 2.8-2.8V9.8C17.8 8.2 17.2 7 15 7h-.5Zm-3.2 4.2h4.5v1.6h-4.5v-1.6Z" fill="#FFD43B" />
        </svg>
      )
    case 'Java':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#E76F00" />
          <path d="M7 15.5c0-2.2 1.8-3.2 5-3.2h3.5v2.3c0 1.6-1.4 3.2-3.7 3.2H7v-2.3Zm7.5-5.1c.7 0 1.5.1 2.3.5l.5-1.7c-.8-.3-1.8-.5-3-.5-3 0-5.2 1.8-5.2 4.4 0 2.7 2.1 4 5.2 4 1.1 0 2.1-.2 3-.5l-.5-1.8c-.7.3-1.4.4-2.2.4-1.7 0-2.8-.7-2.8-1.9 0-1.1 1.1-1.8 2.8-1.8Z" fill="#fff" />
        </svg>
      )
    case 'C#':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#7F52FF" />
          <path d="M7 8.5h4.7v1.8H9.7v1.4h2.1v1.8H9.7v2.1H7.8v-2.1H7v-1.8h.8V10.3H7V8.5Zm8 0h2.4l-3.8 7.5h-2.1l3.5-7.5Zm-1.5 0h2.4v7.5h-2.4V8.5Z" fill="#fff" />
        </svg>
      )
    case 'SQL':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#0F766E" />
          <path d="M7 8.3C7 6.7 8.8 5.5 12 5.5s5 1.2 5 2.8S15.2 11 12 11s-5-1.2-5-2.7Zm0 4.2c0 1.6 2 2.7 5 2.7s5-1.1 5-2.7v2.2c0 1.5-2 2.8-5 2.8s-5-1.3-5-2.8v-2.2Zm0 4.3c0 1.6 2 2.7 5 2.7s5-1.1 5-2.7v1.6c0 1.6-2 2.8-5 2.8s-5-1.2-5-2.8v-1.6Z" fill="#fff" />
        </svg>
      )
    case 'React':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#61DAFB" />
          <circle cx="12" cy="12" r="2.7" fill="#0B1F2A" />
          <g stroke="#0B1F2A" strokeWidth="1.2" fill="none" strokeLinecap="round">
            <ellipse cx="12" cy="12" rx="7" ry="3.1" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="7" ry="3.1" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="7" ry="3.1" transform="rotate(120 12 12)" />
          </g>
        </svg>
      )
    case 'Next.js':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#111827" />
          <path d="M17.4 17.7 10.7 7.5h2.5l6.7 10.2h-2.5ZM7.4 7.5h2.6l6.3 9.4h-2.6L7.4 7.5Z" fill="#fff" />
        </svg>
      )
    case 'Node.js':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#3C873A" />
          <path d="M12 6.2 6.7 9.3v5.4L12 17.8l5.3-3.1V9.3L12 6.2Zm0 2.3 2.8 1.6-2.8 1.7-2.8-1.7L12 8.5Zm-3 2.6 2.2 1.3v2.8l-2.2-1.3v-2.8Zm6 0v2.8l-2.2 1.3v-2.8l2.2-1.3Z" fill="#fff" />
        </svg>
      )
    case 'Express.js':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#1F2937" />
          <path d="M7 15V9h2l1.8 2.4L12.6 9H14v6h-1.8v-3.3l-1.6 2.2h-.7l-1.6-2.2V15H7Zm8.5-6h2.2v6h-2.2V9Z" fill="#fff" />
        </svg>
      )
    case 'Fast API':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#059669" />
          <path d="M12 5 5.5 12.2h4.4l-1.1 6.8L18.5 11h-4.2l1.9-5.8Z" fill="#fff" />
        </svg>
      )
    case 'ASP.NET Core':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#512BD4" />
          <path d="M7 7.5h10v2H7v-2Zm-1.5 4.5h12.5v2.5H5.5V12Zm3 4h6v2h-6v-2Z" fill="#fff" />
        </svg>
      )
    case 'REST APIs':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#6D28D9" />
          <path d="M8 8.5h8v2H8v-2Zm-1 3.5h10v2H7v-2Zm2 3.5h6v2H9v-2Z" fill="#fff" />
        </svg>
      )
    case 'PostgreSQL':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#336791" />
          <path d="M12 6.8c-1.7 0-3.1.9-3.1 2.1v5.6c0 1.3 1.4 2.1 3.1 2.1s3.1-.8 3.1-2.1V8.9c0-1.2-1.4-2.1-3.1-2.1Zm0 1.6c1.2 0 1.9.4 1.9 1.1v4.9c0 .7-.7 1.1-1.9 1.1s-1.9-.4-1.9-1.1V9.5c0-.7.7-1.1 1.9-1.1Z" fill="#fff" />
        </svg>
      )
    case 'MongoDB':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#47A248" />
          <path d="M12 5.2c2.9 0 4.7 1.8 4.7 4.5 0 2.1-1.3 3.7-3.2 4.6v3.4h-2.9v-3.3c-1.8-.9-3.1-2.5-3.1-4.7 0-2.7 1.8-4.5 4.5-4.5Zm-1.7 7.3c.8.5 1.5.7 2.7.7 1.4 0 2.4-.5 2.9-1.3.2-.4.3-.9.3-1.4 0-1.5-.9-2.3-2.7-3.2-.4-.2-.7-.4-1.1-.6-.8-.5-1.1-.8-1.1-1.4 0-.6.5-1.1 1.5-1.1.6 0 1.1.2 1.6.5l1.1-1.4c-.6-.4-1.5-.8-2.7-.8-2 0-3.4 1.1-3.4 2.8 0 1.4.8 2.4 2.7 3.2.7.3 1.3.6 1.7.8.8.5 1.2.9 1.2 1.5 0 .7-.6 1.2-1.7 1.2-.8 0-1.5-.2-2.2-.7l-1.1 1.4c.8.6 1.9 1 3.3 1 2.2 0 3.7-1.2 3.7-3 0-1.7-1.1-2.8-3.1-3.6-.7-.3-1.3-.6-1.7-.8Z" fill="#fff" />
        </svg>
      )
    case 'MySQL':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#4479A1" />
          <path d="M7 8.5c0-1.3 1.5-2.2 5-2.2s5 .9 5 2.2v6.9c0 1.3-1.5 2.1-5 2.1s-5-.8-5-2.1V8.5Zm5-1.1c2.6 0 3.6.5 3.6 1.1s-1 1.1-3.6 1.1-3.6-.5-3.6-1.1.9-1.1 3.6-1.1Zm-3.6 3.4c0 .7 1 1.2 3.6 1.2 2.6 0 3.6-.5 3.6-1.2v2.4c0 .7-1 1.2-3.6 1.2s-3.6-.5-3.6-1.2v-2.4Zm1.7 3.1h3.8v1.7h-3.8v-1.7Z" fill="#fff" />
        </svg>
      )
    case 'Docker':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#2496ED" />
          <path d="M7 13.5h2.5v-2H7v2Zm3-2h2.4v-2H10v2Zm3 0h2.5v-2H13v2Zm-3 3h2.5v-2H10v2Zm3 0h2.5v-2H13v2Zm5-5.4c-.5-.3-1.2-.6-2.2-.8.1-.4.2-.9.2-1.4H7.9c0 .4.1.8.2 1.2-.9.2-1.6.5-2.1.9C5.6 9.7 5.5 11 5.5 12.1c0 1.2.8 2.1 2.2 2.1h8.6c1.4 0 2.2-.9 2.2-2.1 0-1.1-.6-2.4-1.8-3.1Z" fill="#fff" />
        </svg>
      )
    case 'AWS':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#FF9900" />
          <path d="M12 6.5c-1.7 0-3.2.6-4.3 1.8.5-.2 1.2-.3 1.8-.3 1.2 0 2.4.4 3.4 1.3l1.2-1.4c-.9-.8-2.1-1.4-3.8-1.4Zm4.4 3.9c.8 1 .9 2.2.9 3.5 0 1.5-.5 2.9-1.5 3.8-.9.8-2.2 1.3-3.8 1.3-1.9 0-3.5-.7-4.8-2.1l1.6-1.5c.9.9 1.9 1.3 3.3 1.3 1 0 1.8-.3 2.3-.8.6-.6.8-1.4.8-2.2 0-.8-.2-1.4-.7-1.8-.8-.7-1.8-1-3.4-1h-.5v2.1h-1.8V9.5h3.1c1.9 0 3.3.5 4.3 1.7Z" fill="#fff" />
        </svg>
      )
    case 'GitHub':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#181717" />
          <path d="M12 5.5A6.5 6.5 0 0 0 8.2 18c.3.1.5 0 .5-.2v-1.5c-2 .4-2.5-1-2.5-1-.3-.9-.8-1.2-.8-1.2-.7-.5 0-.5 0-.5.8.1 1.2.9 1.2.9.7 1.2 1.9 1 2.3.8.1-.7.3-1.1.6-1.3-1.7-.2-3.5-.9-3.5-4 0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.2 0 0 .8-.3 2.4.9.7-.2 1.5-.3 2.3-.3s1.6.1 2.3.3c1.6-1.2 2.4-.9 2.4-.9.5 1.1.2 2 .1 2.2.6.6.9 1.4.9 2.3 0 3.1-1.8 3.8-3.5 4 .4.4.6.9.6 1.7v2.3c0 .2.2.3.5.2A6.5 6.5 0 0 0 12 5.5Z" fill="#fff" />
        </svg>
      )
    case 'Jest':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#C21325" />
          <path d="M12 6.7 7 9.3v5.4l5 2.6 5-2.6V9.3L12 6.7Zm-2.8 4.4 2.8 1.5 2.8-1.5-.7-1.2-2.1 1.1-2.1-1.1-.7 1.2Zm-.7 2.3 1.5.8v1.9l-1.5-.8v-1.9Zm4.9 0v1.9l-1.5.8v-1.9l1.5-.8Z" fill="#fff" />
        </svg>
      )
    case 'Cypress':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#17212D" />
          <path d="M8.2 7.1h7.6v2.1H14l-1.4 6.8H9.7L8.1 9.2h-1V7.1h1.1Zm2.9 2.1h2.5l-.8 4h-1l-.7-4Zm1.9 8.1h2.3v1.5h-2.3v-1.5Z" fill="#5BC0DE" />
        </svg>
      )
    case 'Playwright':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#2EAD33" />
          <path d="M12 5.5 18.4 9v6L12 18.5 5.6 15V9L12 5.5Zm0 2.5L8.2 9.8v4.4L12 15.3l3.8-1.1V9.8L12 8Zm-1.7 2.2h3.4v2h-3.4v-2Z" fill="#fff" />
        </svg>
      )
    case 'Postman':
      return (
        <svg {...baseProps}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#FF6C37" />
          <path d="M7 8.6c1.3-.9 2.8-1.3 4.3-1.3 2 0 3.9.8 5.1 2.1l-1.8 1.3c-.9-.9-2-.9-3.3-.9-1.4 0-2.4.4-3.2 1.2l-1.1-2.4Zm2.5 4.1h5.1v1.7H9.5v-1.7Zm.2 3.2h4.7v1.7H9.7v-1.7Z" fill="#fff" />
        </svg>
      )
    default:
      return defaultIcon
  }
}
