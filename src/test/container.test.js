import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Item from '../component/Item';
import Container from '../component/Container';

const fruit = {
  idMeal: '53065',
  strMeal: 'Sushi',
  strDrinkAlternate: null,
  strCategory: 'Seafood',
  strArea: 'Japanese',
  // eslint-disable-next-line
  url: 'https:\/\/www.bbcgoodfood.com\/recipes\/simple-sushi',
  Tags: null,
};
test('Demo test', () => {
  expect((1 + 2)).toBe(3);
});

test('renders container Component', () => {
  const con = render(
    <BrowserRouter>
      <Provider store={store}>
        <Container />
      </Provider>
    </BrowserRouter>,
  );
  expect(con).toMatchSnapshot();
});

test('renders Item Component', () => {
  const item = render(
    <BrowserRouter>
      <Provider store={store}>
        <Item record={fruit} key={fruit.id} count={0} />
      </Provider>
    </BrowserRouter>
    ,
  );
  expect(item).toMatchSnapshot();
});
