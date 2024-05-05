import { screen, render } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import MOCKDATA from "../mock/ResCardMock.json";
import "@testing-library/jest-dom";

test("Should render the RestuarantCard component", () => {
  render(<RestaurantCard resData={MOCKDATA} />);

  const name = screen.getByText("Chinese Wok");

  expect(name).toBeInTheDocument();
});
