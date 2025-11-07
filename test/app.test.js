const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

describe('Hello World App', () => {
  let dom;
  let document;

  beforeEach(() => {
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    dom = new JSDOM(html);
    document = dom.window.document;
    
    // Load the script
    const scriptContent = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
    eval(scriptContent);
  });

  test('should have greeting element', () => {
    const greetingElement = document.getElementById('greeting');
    expect(greetingElement).toBeTruthy();
    expect(greetingElement.textContent).toBe('Hello, World!');
  });

  test('should have button', () => {
    const button = document.querySelector('button');
    expect(button).toBeTruthy();
    expect(button.textContent).toBe('Change Greeting');
  });
});
