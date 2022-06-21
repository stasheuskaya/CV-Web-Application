import renderer from "react-test-renderer";
import AddSkillForm from "../components/Skills/AddSkillForm/add_skill_form";
import { Provider } from 'react-redux';
import { store } from "../store/store"

describe('AddSkillForm Page', () => {
    it('renders content', () => {
		expect(renderer.create(
			<Provider store={store}>
                <AddSkillForm />
			</Provider>)).toMatchSnapshot();
	});
});