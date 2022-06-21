import renderer from "react-test-renderer";
import Expertise from "../components/Expertise/expertise";
import { Provider } from 'react-redux';
import { store } from "../store/store"
import { expertisesData } from "../mock_data/mock_data"

describe('TimeLine Page', () => {
    it('renders content', () => {
		expect(renderer.create(
			<Provider store={store}>
                <Expertise data={expertisesData}/>
			</Provider>)).toMatchSnapshot();
	});
});