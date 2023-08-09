const { BASE_URL: BASE_URL } = require('../env');

class LandingPage {
    // all elements of the page described in constructor

    constructor(page) {
        this.page = page;
        this.pageUrl = BASE_URL;

        // button to accept cookies
        this.cookiesButton = page.getByRole('button', { name: 'ACEPTAR' })
        this.cookiesPanel = page.getByText('Uso CookiesEsta página web, propiedad de Codere Online S.A.U, utiliza cookies pr')

        this.loginButton = page.getByRole('button', { name: 'Acceder' });

    }

    async navigate() {
        await this.page.goto(this.pageUrl);
    }
}

module.exports = LandingPage;

