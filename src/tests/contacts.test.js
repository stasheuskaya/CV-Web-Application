import renderer from "react-test-renderer";
import Contacts from "../components/Contacts/contacts";
import { Provider } from 'react-redux';
import { store } from "../store/store"

describe('Contacts Page', () => {
    it('renders content', () => {
		expect(renderer.create(
			<Provider store={store}>
                <Contacts />
			</Provider>)).toMatchSnapshot();
	});
});