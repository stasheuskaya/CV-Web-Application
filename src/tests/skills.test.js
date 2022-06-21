import renderer from "react-test-renderer";
import Skills from "../components/Skills/Skills/skills";
import { Provider } from 'react-redux';
import { store } from "../store/store"

describe('Skills Page', () => {
    it('renders content', () => {
		expect(renderer.create(
			<Provider store={store}>
                <Skills />
			</Provider>)).toMatchSnapshot();
	});
});