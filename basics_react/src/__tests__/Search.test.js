import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mock/ResListMockData.json";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

test("test search after burger was searched", async () => {
  await act(
    async () =>
      await render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
  );
  const restaurantCardsbeforeSearch = screen.getAllByTestId("res-card");
  expect(restaurantCardsbeforeSearch.length).toBe(9);

  const searchInput = screen.getByTestId("searchBox");
  const searchButton = screen.getByText("Search");

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchButton);

  const restaurantCardsAfterSearch = screen.getAllByTestId("res-card");
  expect(restaurantCardsAfterSearch.length).toBe(2);
});
