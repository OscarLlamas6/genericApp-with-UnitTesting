// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Para poder utilizar el code coverage con enzime.
// fuente: https://medium.com/swlh/react-testing-using-jest-along-with-code-coverage-report-7454b5ba0236
// [!!!] usar `npm run test -- --coverage --watchAll=false` para poder ver el code coverage
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new Adapter() });