import { useEffect, useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  IconButton,
  Link,
  Paper,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import MenuIcon from '@mui/icons-material/Menu'
import {
  ABOUT_BODY,
  ABOUT_EYEBROW,
  ABOUT_TITLE_ACCENT,
  ABOUT_TITLE_PREFIX,
  ABOUT_TITLE_SUFFIX,
  CITY,
  CONTACT_EYEBROW,
  CONTACT_TITLE,
  CURRENT_ROLE,
  EMAIL,
  FOOTER_TAGLINE,
  FULL_NAME,
  GITHUB_URL,
  HERO_INTRO_PREFIX,
  HERO_INTRO_SUFFIX,
  HERO_CTA,
  RESUME_DOWNLOAD_NAME,
  RESUME_URL,
  HERO_TITLE,
  NAME_INITIALS,
  HERO_TITLE_EMPHASIS,
  LINKEDIN_URL,
  PROJECTS,
  SKILLSET_EYEBROW,
  SKILL_GROUPS,
  START_YEAR,
  STATE,
  WORK_HEADING,
  WORK_SUBHEADING,
} from './constants'
import { renderSkillIcon } from './skillIcons.jsx'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('dark-mode') !== 'false')
  const currentyear = new Date().getFullYear().toString()

  useEffect(() => {
    localStorage.setItem('dark-mode', String(darkMode))
  }, [darkMode])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const scrollToProject = (index) => {
    document.getElementById(`project-${index}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }

  return (
    <Box className={`portfolio-shell ${darkMode ? 'dark-mode' : ''}`}>
      <AppBar position="sticky" elevation={0} className="site-header">
        <Toolbar className="header-toolbar">
          <Typography className="wordmark" component="a" href="#top">
            {NAME_INITIALS}<span>.</span>
          </Typography>
          <Box className={`nav-links ${mobileMenuOpen ? 'is-open' : ''}`}>
            <Button onClick={() => scrollTo('work')} sx={{ color: 'inherit', textTransform: 'none', fontWeight: 400 }}>Work</Button>
            <Button onClick={() => scrollTo('about')} sx={{ color: 'inherit', textTransform: 'none', fontWeight: 400 }}>About</Button>
            <Button
              href={RESUME_URL}
              download={RESUME_DOWNLOAD_NAME}
              variant="text"
              sx={{ color: 'inherit', textTransform: 'none', fontWeight: 400 }}
            >
              Resume
            </Button>
            <Button onClick={() => scrollTo('contact')} sx={{ color: 'inherit', textTransform: 'none', fontWeight: 400 }}>Contact</Button>
          </Box>
          <Tooltip title={darkMode ? 'Use light theme' : 'Use dark theme'}>
            <IconButton
              className="theme-toggle"
              aria-label={darkMode ? 'Use light theme' : 'Use dark theme'}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>
          <IconButton
            className="menu-button"
            aria-label="Toggle navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <main id="top">
        <Container maxWidth="lg" className="hero-section">
          <Box className="hero-copy">
            <Typography component="h1">
              {HERO_TITLE} <em>{HERO_TITLE_EMPHASIS}</em>
            </Typography>
            <Typography className="hero-intro">
              {HERO_INTRO_PREFIX}
              <Link
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                underline="hover"
                sx={{ color: 'inherit', fontWeight: 500 }}
              >
                {FULL_NAME}
              </Link>
              {HERO_INTRO_SUFFIX}
            </Typography>
            <Stack direction="row" spacing={2} className="hero-actions">
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollTo('work')}
              >
                {HERO_CTA}
              </Button>
            </Stack>
          </Box>

          <Box className="hero-aside">
            <Typography className="aside-label">Currently</Typography>
            <Typography className="aside-value">
              {CURRENT_ROLE}
              <br />
              based in {CITY}, {STATE}
            </Typography>
            <Divider />
            <Typography className="aside-label">Previously at</Typography>
            <Stack className="aside-value" spacing={0.5} alignItems="flex-start">
              {PROJECTS.map((project, index) => (
                <Button
                  key={project.companyName}
                  variant="text"
                  size="small"
                  onClick={() => scrollToProject(index)}
                  sx={{
                    minWidth: 0,
                    padding: 0,
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    color: 'inherit',
                    font: 'inherit',
                    lineHeight: 1.5,
                  }}
                >
                  {project.companyName}
                </Button>
              ))}
            </Stack>
          </Box>
        </Container>

        <Box id="work" className="work-section">
          <Container maxWidth="lg">
            <Box className="section-heading">
              <Typography className="eyebrow">
                Selected work / {START_YEAR}—{currentyear.slice(-2)}
              </Typography>
              <Typography component="h2">
                {WORK_HEADING}
                <br />
                <span>{WORK_SUBHEADING}</span>
              </Typography>
            </Box>
            <Stack spacing={3} className="project-list">
              {PROJECTS.map((project, index) => (
                <Paper
                  component="article"
                  elevation={0}
                  className="project-card"
                  key={project.companyName}
                  id={`project-${index}`}
                >
                  <Box
                    className="project-preview"
                  >
                    <img
                      className="project-thumbnail"
                      src={project.thumbnail}
                      alt={project.projectName}
                    />
                    <Typography className="project-preview-label">{project.projectName}</Typography>
                  </Box>
                  <Box className="project-details">
                    <Typography component="h3">{project.companyName}</Typography>
                    <Typography className="project-description">
                      {project.description}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                    >
                      {project.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" />
                      ))}
                    </Stack>
                  </Box>
                  {/* <IconButton
                    className="project-link"
                    aria-label={`View ${project.projectName}`}
                  >
                    <ArrowOutwardIcon />
                  </IconButton> */}
                </Paper>
              ))}
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="lg" id="about" className="about-section">
          <Box className="about-copy">
            <Typography className="eyebrow">{ABOUT_EYEBROW}</Typography>
            <Typography component="h2">
              {ABOUT_TITLE_PREFIX}
              <br />
              <span className="accent-text">{ABOUT_TITLE_SUFFIX}</span> {ABOUT_TITLE_ACCENT}
            </Typography>
            <Typography className="body-copy">{ABOUT_BODY}</Typography>
          </Box>

          <Box className="skills-panel">
            <Typography className="eyebrow">{SKILLSET_EYEBROW}</Typography>
            {SKILL_GROUPS.map((group) => (
              <Box className="skill-group" key={group.label} sx={{ mb: 2 }}>
                <Typography className="skill-group-label" sx={{ fontWeight: 700, mb: 1 }}>
                  {group.label}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {group.skills.map((skill) => (
                    <Tooltip key={skill} title={skill} arrow placement="top">
                      <span>
                        <IconButton className="skill-icon-button" aria-label={skill} size="small">
                          {renderSkillIcon(skill)}
                        </IconButton>
                      </span>
                    </Tooltip>
                  ))}
                </Stack>
              </Box>
            ))}
            <Button className="resume-link" endIcon={<ArrowOutwardIcon />} href={RESUME_URL} download={RESUME_DOWNLOAD_NAME}>
              Download resume
            </Button>
          </Box>
        </Container>

        <Box id="contact" className="contact-section">
          <Container maxWidth="lg">
            <Typography className="eyebrow">{CONTACT_EYEBROW}</Typography>
            <Typography component="h2">
              {CONTACT_TITLE.split(' ').slice(0, -1).join(' ')}
              <br />
              <em>{CONTACT_TITLE.split(' ').slice(-1)[0]}</em>
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowOutwardIcon />}
              href={`mailto:${EMAIL}`}
            >
              {EMAIL}
            </Button>
            <Stack direction="row" spacing={1} className="social-links">
              <Tooltip title="LinkedIn">
                <IconButton href={LINKEDIN_URL} target="_blank" aria-label="LinkedIn">
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="GitHub">
                <IconButton href={GITHUB_URL} target="_blank" aria-label="GitHub">
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </Container>
        </Box>
      </main>

      <Box component="footer">
        <Container maxWidth="lg">
          <Typography>© {currentyear} {FULL_NAME}</Typography>
          <Typography>{FOOTER_TAGLINE}</Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default App
