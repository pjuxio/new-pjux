const languageMiddleware = (req, res, next) => {
    const supportedLanguages = ['en', 'es'];
    const defaultLanguage = 'en';

    // Check if language is set in session or cookies
    let language = req.cookies.language || req.session.language || defaultLanguage;

    // Validate the language
    if (!supportedLanguages.includes(language)) {
        language = defaultLanguage;
    }

    // Store the language in the session and locals
    req.session.language = language;
    res.locals.language = language;

    next();
};

module.exports = languageMiddleware;