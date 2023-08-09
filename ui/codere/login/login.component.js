const { BASE_URL: BASE_URL } = require('../env');

class LoginComponent {
    // all elements of the page described in constructor

    constructor(page) {
        this.page = page;

        this.userTextBox = page.getByRole('textbox', { name: 'Usuario / Correo electrónico' });
        this.passwordTextBox = page.getByLabel('Contraseña');
        this.loginButton = page.locator('#btnaccess');
        this.closeButton = page.getByRole('button', { name: 'close' });

        this.requiredFieldsMessage = page.getByText('Revisa que todos los campos estén rellenos');
        this.loginErrorMessage = page.getByRole('heading', { name: 'Error de inicio de sesión' });
        this.okButton = page.getByRole('button', { name: 'OK' });
        this.successfulLoginMessage = page.getByRole('heading', { name: 'Bienvenido' });

    }

    async attemptLogin(username, password) {
        await this.userTextBox.click();
        await this.userTextBox.type(username);
        await this.passwordTextBox.click();
        await this.passwordTextBox.type(password);
        await this.loginButton.click();
    }

}

module.exports = LoginComponent;

