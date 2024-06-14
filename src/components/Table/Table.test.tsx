/**
 * @author  sai
 * created  2024-06-12
 * project  coding-assignment-12-cra
 */

import { render, screen } from "@testing-library/react";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableBody from "./TableBody";

describe("UIGarden/Table", () => {
  it("should be visible", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Heading One</TableCell>
            <TableCell>Heading Two</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Row One, Column One</TableCell>
            <TableCell>Row Two, Column Two</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId("ui-garden-table")).toBeVisible();
  });

  it("should change state when disabled", () => {
    render(
      <Table disabled>
        <TableHeader disabled>
          <TableRow disabled>
            <TableCell disabled>Heading One</TableCell>
            <TableCell disabled>Heading Two</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody disabled>
          <TableRow disabled>
            <TableCell disabled>Row One, Column One</TableCell>
            <TableCell disabled>Row Two, Column Two</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId("ui-garden-table")).toBeVisible();
    expect(screen.getByTestId("ui-garden-table")).toHaveStyle("cursor: not-allowed");
  });
});
