import renderer from "react-test-renderer";
import Home from "../pages/Home/home"
import { Provider } from 'react-redux';
import { store } from "../store/store"
import { BrowserRouter, Routes, Route } from "react-router-dom";

describe('Home Page', () => {
	beforeAll(() => {
        window.history.pushState({}, '', `/`);
	});

    it('renders content', () => {
		expect(renderer.create(
			<Provider store={store}>
				<BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                    </Routes>
                </BrowserRouter>
			</Provider>)).toMatchSnapshot();
	});
});
