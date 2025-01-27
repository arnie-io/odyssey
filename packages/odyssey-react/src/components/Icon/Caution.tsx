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

// Code automatically generated by svgr; DO NOT EDIT.

import { forwardRef } from "react";
import type { ComponentPropsWithRef } from "react";
import { useOmit } from "../../utils";
import SvgIcon from "./SvgIcon";

export interface Props
  extends Omit<ComponentPropsWithRef<"svg">, "style" | "className"> {
  title?: string;
}

const CautionIcon = forwardRef<SVGSVGElement, Props>((props, ref) => {
  const omitProps = useOmit(props);
  return (
    <SvgIcon ref={ref} {...omitProps}>
      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.52856 1.29141L1.05633 12.2371C0.881095 12.5876 1.13594 13 1.52777 13H12.4722C12.8641 13 13.1189 12.5876 12.9437 12.2371L7.47144 1.29141C7.2772 0.902874 6.7228 0.902874 6.52856 1.29141ZM8 4.50001H6V9.00001H8V4.50001ZM7 12C7.55228 12 8 11.5523 8 11C8 10.4477 7.55228 10 7 10C6.44772 10 6 10.4477 6 11C6 11.5523 6.44772 12 7 12Z"
          fill="currentColor"
        />
      </svg>
    </SvgIcon>
  );
});

CautionIcon.displayName = "CautionIcon";

export default CautionIcon;
