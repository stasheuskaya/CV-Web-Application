import renderer from "react-test-renderer";
import Feedback from "../components/Feedback/feedback";
import { Provider } from 'react-redux';
import { store } from "../store/store"
import { feedbackData } from "../mock_data/mock_data"

describe('Feedback Page', () => {
    it('renders content', () => {
		expect(renderer.create(
			<Provider store={store}>
                <Feedback data={feedbackData}/>
			</Provider>)).toMatchSnapshot();
	});
});