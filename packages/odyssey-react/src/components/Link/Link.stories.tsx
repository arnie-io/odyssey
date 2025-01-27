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

import type { Story } from "@storybook/react";
import Link from ".";
import type { Props } from ".";

export default {
  title: `Components/Link`,
  component: Link,
};

const Template: Story<Props> = ({ children, variant, href, target, rel }) => (
  <Link href={href} target={target} rel={rel} variant={variant}>
    {children}
  </Link>
);

export const Default = Template.bind({});
Default.args = {
  href: "#anchor",
  children: "Anchor link",
};

export const Secondary = Template.bind({});
Secondary.args = {
  href: "#anchor",
  variant: "secondary",
  children: "Secondary link",
};

export const External = Template.bind({});
External.args = {
  href: "https://www.okta.com",
  children: "Visit okta.com",
  rel: "noopener",
  target: "_blank",
};
