// ここにテストコードを書くっぽい（yarn testで実行）
//  - https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file
describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Great success!')
	});

	it('navigates to /about', () => {
		cy.get('nav a').contains('about').click();
		cy.url().should('include', '/about');
	});

	it('navigates to /blog', () => {
		cy.get('nav a').contains('blog').click();
		cy.url().should('include', '/blog');
	});
});