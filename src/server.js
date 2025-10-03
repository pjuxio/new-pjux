const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const cookieParser = require('cookie-parser'); // For handling cookies
const session = require('express-session'); // For handling sessions
const languageMiddleware = require('./middleware/language'); // Import the language middleware

const app = express();
const PORT = process.env.PORT || 3000;

// Define file paths at the top level
// const eventsPath = path.join(process.cwd(), 'data/events.json'); //
// const testimonialsPath = path.join(process.cwd(), 'data/testimonials.json');

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Serve static files from the /public directory
app.use(express.static(path.join(__dirname, '../public')));

// Middleware for parsing JSON, cookies, and sessions
app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

// Use the language middleware
app.use(languageMiddleware);

// Define a route for the homepage
app.get('/', async (req, res) => {
  try {
    const language = res.locals.language;

    // Load content for each partial
    const navContent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/nav/${language}.json`), 'utf-8')
    );
    const heroContent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/hero/${language}.json`), 'utf-8')
    );
    const aboutCTAcontent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/aboutCTA/${language}.json`), 'utf-8')
    );
    const testimonialsContent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/testimonials/${language}.json`), 'utf-8')
    );
    const emailContent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/email/${language}.json`), 'utf-8')
    );
    const eventsContent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/events/${language}.json`), 'utf-8')
    );
    const featuredservicesContent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/featuredServices/${language}.json`), 'utf-8')
    );
    const approachCTAContent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/approachCTA/${language}.json`), 'utf-8')
    );

    // Render the index page with content
    res.render('index', {
      title: 'PJUX.io',
      currentPage: 'home',
      description: 'We help visionaries grow with secure &amp; resilient technology solutions.',
      ogImage: '/img/pjux-og.png',
      ogUrl: 'https://lmf-proto-bff9a3a296aa.herokuapp.com/',
      navContent,
      heroContent,
      aboutCTAcontent,
      testimonialsContent,
      approachCTAContent,
      featuredservicesContent,
      emailContent,
      eventsContent,
      partialsPath: `partials`
    });
  } catch (error) {
    console.error('Error loading content:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Define a route for the about page

app.get('/about', async (req, res) => {
  try {
    const language = res.locals.language;

    // Load content for the navigation and About page
    const navContent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/nav/${language}.json`), 'utf-8')
    );
    const aboutContent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/about/${language}.json`), 'utf-8')
    );
    const emailContent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/email/${language}.json`), 'utf-8')
    );

    // Dynamically generate the OG URL
    const ogUrl = `${req.protocol}://${req.get('host')}/about`;

    // Render the About page with content
    res.render('about', {
      title: 'About - PJUX.io',
      currentPage: 'about',
      description: 'About PJUX.io',
      ogImage: '/img/pjux-og.png',
      ogUrl: 'https://lmf-proto-bff9a3a296aa.herokuapp.com/',
      aboutContent,
      navContent,
      emailContent,
      partialsPath: `partials`
    });
  } catch (error) {
    console.error('Error loading about content:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

// Define a route for the services page

app.get('/services', async (req, res) => {
  try {
    const language = res.locals.language;

    // Load content for the navigation and services page
    const navContent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/nav/${language}.json`), 'utf-8')
    );
    const servicesContent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/services/${language}.json`), 'utf-8')
    );
    const emailContent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/email/${language}.json`), 'utf-8')
    );

    // Dynamically generate the OG URL
    const ogUrl = `${req.protocol}://${req.get('host')}/services`;

    // Render the Services page with content
    res.render('services', {
      title: 'Services - PJUX.io',
      currentPage: 'services',
      description: 'Our Services - PJUX.io',
      ogImage: '/img/pjux-og.png',
      ogUrl: 'https://lmf-proto-bff9a3a296aa.herokuapp.com/',
      servicesContent,
      navContent,
      emailContent,
      partialsPath: `partials`
    });
  } catch (error) {
    console.error('Error loading about content:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

// Define a route for the press page

app.get('/press', async (req, res) => {
  try {
    const language = res.locals.language;

    // Load content for the navigation and Press page
    const navContent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/nav/${language}.json`), 'utf-8')
    );
    const pressContent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/press/${language}.json`), 'utf-8')
    );
    const emailContent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/email/${language}.json`), 'utf-8')
    );

    // Dynamically generate the OG URL
    const ogUrl = `${req.protocol}://${req.get('host')}/press`;

    // Render the press page with content
    res.render('press', {
      title: 'Press - Las Muertes Film',
      currentPage: 'press',
      description: 'Explore press materials and news about Las Muertes Film.',
      ogImage: '/img/lmf-og.png',
      ogUrl,
      pressContent,
      navContent,
      emailContent,
      partialsPath: `partials`
    });
  } catch (error) {
    console.error('Error loading press content:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

// Define a route for the archive page

app.get('/archive', async (req, res) => {
  try {
    const language = res.locals.language;

    // Load content for the navigation and archive page
    const navContent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/nav/${language}.json`), 'utf-8')
    );
    const archiveContent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/archive/${language}.json`), 'utf-8')
    );
    const emailContent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/email/${language}.json`), 'utf-8')
    );
    const mixcloudContent = JSON.parse(
      await fs.readFile(path.join(__dirname, `../data/mixcloud/${language}.json`), 'utf-8')
    );

    // Dynamically generate the OG URL
    const ogUrl = `${req.protocol}://${req.get('host')}/archive`;

    // Render the archive page with content
    res.render('archive', {
      title: 'Cultural Archive - Las Muertes Film',
      currentPage: 'archive',
      description: 'Explore the cultureal archive.',
      ogImage: '/img/lmf-og.png',
      ogUrl,
      archiveContent,
      mixcloudContent,
      navContent,
      emailContent,
      partialsPath: `partials`
    });
  } catch (error) {
    console.error('Error loading archive content:', error.message);
    res.status(500).send('Internal Server Error');
  }
});




// Define a route to set the language
app.post('/set-language', (req, res) => {
  const { language } = req.body;
  const supportedLanguages = ['en', 'es']; // Define supported languages

  if (supportedLanguages.includes(language)) {
    req.session.language = language; // Store in session
    res.cookie('language', language, { maxAge: 900000, httpOnly: true }); // Store in cookies
    res.sendStatus(200); // Success
  } else {
    res.status(400).send('Invalid language selection'); // Reject invalid input
  }
});

// Define a test route to verify file access
app.get('/test-files', async (req, res) => {
  try {
    const events = JSON.parse(await fs.readFile(eventsPath, 'utf-8'));
    const testimonials = JSON.parse(await fs.readFile(testimonialsPath, 'utf-8'));
    res.json({ events, testimonials });
  } catch (error) {
    console.error('Error accessing files:', error);
    res.status(500).send('Error accessing files');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});