/*!
 * Copyright (c) 2021-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import type { ReactNode, ReactElement, ComponentPropsWithRef } from "react";

import { useOmit, forwardRefWithStatics } from "../../utils";

import TableContainer from "./TableContainer";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableRow from "./TableRow";
import TableDataCell from "./TableDataCell";
import TableHeaderCell from "./TableHeaderCell";
import TableSortButton from "./TableSortButton";

import ScreenReaderText from "../ScreenReaderText";

import styles from "./Table.module.scss";

type ContainerProps =
  | { withContainer: false; title?: never }
  | {
      /**
       * Whether to use a Table.Container around the Table
       */
      withContainer?: true;
      /**
       * The visible heading for the table
       */
      title: ReactNode;
    };

export type Props = {
  /**
   * Valid Table child elements including Head, Body, and Foot
   */
  children?: ReactElement | ReactElement[];
  /**
   * Provides users of assistive technologies with context for the table contents
   */
  caption: string;
} & ContainerProps &
  ComponentPropsWithRef<"table">;

type Statics = {
  Container: typeof TableContainer;
  Header: typeof TableHeader;
  Body: typeof TableBody;
  Footer: typeof TableFooter;
  Row: typeof TableRow;
  DataCell: typeof TableDataCell;
  HeaderCell: typeof TableHeaderCell;
  SortButton: typeof TableSortButton;
};

export type CellTextFormats = "num" | "date";

/*
 * Tables provide structure for displaying sets of data across rows and columns.
 */
const Table = forwardRefWithStatics<HTMLTableElement, Props, Statics>(
  (props, ref) => {
    const { children, caption, title, withContainer = true, ...rest } = props;

    const omitProps = useOmit(rest);

    const TableEl = () => (
      <table ref={ref} className={styles.root} {...omitProps}>
        <caption>
          <ScreenReaderText>{caption}</ScreenReaderText>
        </caption>
        {children}
      </table>
    );

    return (
      <>
        {withContainer ? (
          <TableContainer title={title}>
            <TableEl />
          </TableContainer>
        ) : (
          <TableEl />
        )}
      </>
    );
  }
);

Table.Container = TableContainer;
Table.Header = TableHeader;
Table.Body = TableBody;
Table.Footer = TableFooter;
Table.Row = TableRow;
Table.DataCell = TableDataCell;
Table.HeaderCell = TableHeaderCell;
Table.SortButton = TableSortButton;

export default Table;
