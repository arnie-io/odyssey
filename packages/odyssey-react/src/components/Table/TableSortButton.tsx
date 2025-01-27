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

import { useCx, useOmit } from "../../utils";
import SortIcon from "../Icon/Sort";
import SortAscIcon from "../Icon/SortAsc";
import SortDescIcon from "../Icon/SortDesc";
import ScreenReaderText from "../ScreenReaderText";

import styles from "./Table.module.scss";

export type TableSortDirections = "asc" | "desc" | "unsorted";

export type Props = {
  children?: ReactNode;
  direction: TableSortDirections;
} & ComponentProps<"button">;

type Ref = HTMLButtonElement;

const TableSortButton = forwardRef<Ref, Props>((props, ref) => {
  const { children, direction = "unsorted", ...rest } = props;

  const componentClass = useCx(styles.sort, styles[`${direction}Direction`]);

  const omitProps = useOmit(rest);

  return (
    <button ref={ref} className={componentClass} {...omitProps}>
      {children}
      <span className={styles.sortIndicator}>
        {direction === "unsorted" && <SortIcon title="Unsorted" />}
        {direction === "asc" && <SortAscIcon title="Ascending" />}
        {direction === "desc" && <SortDescIcon title="Descending" />}
      </span>
      <ScreenReaderText>click to sort</ScreenReaderText>
    </button>
  );
});

export default TableSortButton;
