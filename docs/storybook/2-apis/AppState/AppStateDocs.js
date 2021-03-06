/* eslint-disable react/jsx-sort-props */

/**
 * @flow
 */

import React from 'react';
import StateChangesExample from './examples/StateChanges';
import { storiesOf } from '@kadira/storybook';
import UIExplorer, { AppText, Code, DocItem } from '../../ui-explorer';

const sections = [
  {
    title: 'Properties',
    entries: [
      <DocItem
        name="static isAvailable"
        description="Determines whether the browser environment supports AppState."
      />,

      <DocItem
        name="static currentState"
        description="Returns the current state of the app: &quot;active&quot; or &quot;background&quot;."
      />
    ]
  },
  {
    title: 'Methods',
    entries: [
      <DocItem
        name="static addEventListener"
        typeInfo="(type: string, handler: Function) => void"
        description={
          <AppText>
            Add a handler to <Code>AppState</Code> changes by listening to the
            <Code>change</Code> event type and providing the <Code>handler</Code>. The handler is
            called with the app state value.
          </AppText>
        }
      />,

      <DocItem
        name="static removeEventListener"
        typeInfo="(type: string, handler: Function) => void"
        description={
          <AppText>
            Remove a handler by passing the change event <Code>type</Code> and the{' '}
            <Code>handler</Code>.
          </AppText>
        }
      />
    ]
  },
  {
    title: 'Example',
    entries: [
      <DocItem
        example={{
          render: () => <StateChangesExample />
        }}
      />
    ]
  }
];

storiesOf('APIs', module).add('AppState', () =>
  <UIExplorer
    description={
      <AppText>
        AppState can tell you if the app is in the foreground or background, and notify you when the
        state changes. States: <Code>active</Code> (the app is running in the foreground),{' '}
        <Code>background</Code> (the app is running in the background, i.e., the user has not
        focused the app's tab).
      </AppText>
    }
    sections={sections}
    title="AppState"
    url="apis/AppState"
  />
);
