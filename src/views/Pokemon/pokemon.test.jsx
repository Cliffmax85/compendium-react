import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import PokemonList from "./PokemonList";
import userEvent from '@testing-library/user-event';


it('should find the loading text and get "pokemon" from the alt text', async () => {
  render(<PokemonList />);
  
  // tests for loading text
  screen.getByText(/loading/i);

  // tests for a wild pikachu
  const text = await screen.findByText(/pika/i);
  console.log(text.textContent);
  expect(text.textContent).toEqual('pikachu');
});

it('should test if the search is functional', async () => {
    render(<PokemonList />);
    await waitForElementToBeRemoved(screen.getByText(/...loading/i));
    const search = screen.getByPlaceholderText('find that pokemon');
    userEvent.type(search, 'venu');

    return waitFor(() => {
      const searchedPokemon = screen.getByText('venusaur-mega');
      expect(searchedPokemon.textContent).toEqual('venusaur-mega');
    });

})