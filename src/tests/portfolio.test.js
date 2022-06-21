import renderer from "react-test-renderer";
import Portfolio from "../components/Portfolio/portfolio";
import { Provider } from 'react-redux';
import { store } from "../store/store"
import { portfolioData } from "../mock_data/mock_data"

describe('Portfolio Page', () => {
    it('renders content', () => {
		expect(renderer.create(
			<Provider store={store}>
                <Portfolio data={portfolioData}/>
			</Provider>)).toMatchSnapshot();
	});
});