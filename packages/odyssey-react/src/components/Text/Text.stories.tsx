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
import React from "react";
import Text from ".";

export default {
  title: `Components/Text`,
  component: Text,
  args: {
    children: "Hello World"
  }
};

const Template: Story = ({ children }) => (
  <Text children={children} />
);

export const Default = Template.bind({});

export const Code = Template.bind({});
Code.args = {
  children: <code>Hello World</code>
};

export const Strong = Template.bind({});
Strong.args = {
  children: <strong>Hello World</strong>
};

export const Emphasis = Template.bind({});
Emphasis.args = {
  children: <em>Hello World</em>
};
