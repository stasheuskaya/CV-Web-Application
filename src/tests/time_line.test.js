import renderer from "react-test-renderer";
import TimeLine from "../components/TimeLine/time_line";
import { Provider } from 'react-redux';
import { store } from "../store/store"
import { setLoading, setLoaded, setError } from "../store/actions/educations_actions"

describe('TimeLine Page', () => {
    it('renders loading content', () => {
        store.dispatch(setLoading())
		expect(renderer.create(
			<Provider store={store}>
                <TimeLine />
			</Provider>)).toMatchSnapshot();
	});

    it('renders loaded content', () => {
        store.dispatch(setLoaded())
		expect(renderer.create(
			<Provider store={store}>
                <TimeLine />
			</Provider>)).toMatchSnapshot();
	});

    it('renders error message content', () => {
        store.dispatch(setError())
		expect(renderer.create(
			<Provider store={store}>
                <TimeLine />
			</Provider>)).toMatchSnapshot();
	});
});