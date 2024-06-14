/**
 * @author  sai
 * created  2024-05-27
 * project  coding-assignment-12-cra
 */

import type { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";
import TableCell from "./TableCell";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

const meta: Meta<typeof Table> = {
  title: "UIGarden/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    children: "Default Cell Content",
    disabled: false,
  },
  render: (args) => (
    <Table disabled={args.disabled}>
      <TableHeader disabled={args.disabled}>
        <TableRow disabled={args.disabled}>
          <TableCell
            key={"table-cell-1"}
            disabled={args.disabled}
          >
            Column Heading 1
          </TableCell>
          <TableCell disabled={args.disabled}>Column Heading 2</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow disabled={args.disabled}>
          <TableCell
            key={"table-body-cell-1"}
            disabled={args.disabled}
          >
            Column 1 Row 1
          </TableCell>
          <TableCell
            key={"table-body-cell-2"}
            disabled={args.disabled}
          >
            Column 2 Row 1
          </TableCell>
        </TableRow>
      </TableBody>
      <TableFooter disabled={args.disabled}>
        <TableRow disabled={args.disabled}>
          <TableCell
            disabled={args.disabled}
            colSpan={2}
          >
            Footer Content
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Table disabled={args.disabled}>
      <TableHeader disabled={args.disabled}>
        <TableRow disabled={args.disabled}>
          <TableCell
            key={"table-cell-1"}
            disabled={args.disabled}
          >
            Column Heading 1
          </TableCell>
          <TableCell disabled={args.disabled}>Column Heading 2</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow disabled={args.disabled}>
          <TableCell
            key={"table-body-cell-1"}
            disabled={args.disabled}
          >
            Column 1 Row 1
          </TableCell>
          <TableCell
            key={"table-body-cell-2"}
            disabled={args.disabled}
          >
            Column 2 Row 1
          </TableCell>
        </TableRow>
      </TableBody>
      <TableFooter disabled={args.disabled}>
        <TableRow disabled={args.disabled}>
          <TableCell
            disabled={args.disabled}
            colSpan={2}
          >
            Footer Content
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};
