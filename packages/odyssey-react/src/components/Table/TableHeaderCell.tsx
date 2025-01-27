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

import type { ReactNode, ComponentProps } from "react";
import { forwardRef } from "react";
import type { CellTextFormats } from "./Table";
import { useCx, useOmit } from "../../utils";

import styles from "./Table.module.scss";

export type Props = {
  children?: ReactNode;
  /**
   * The basic text format for the cell.
   */
  format?: CellTextFormats;
} & ComponentProps<"th">;

type Ref = HTMLTableHeaderCellElement;

const TableHeaderCell = forwardRef<Ref, Props>((props, ref) => {
  const { children, format, ...rest } = props;

  const componentClass = useCx(
    styles.cell,
    styles.headerCell,
    props.scope === "col" && styles.headerCellCol,
    format && styles[`${format}Format`]
  );

  const omitProps = useOmit(rest);

  return (
    <th ref={ref} className={componentClass} {...omitProps}>
      {children}
    </th>
  );
});

export default TableHeaderCell;
