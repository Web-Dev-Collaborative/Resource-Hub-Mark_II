// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.




/*! THIS FILE IS AUTO-GENERATED */

import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';
import {chat_v1} from './v1';

export const VERSIONS = {
  v1: chat_v1.Chat,
};

export function chat(version: 'v1'): chat_v1.Chat;
export function chat(options: chat_v1.Options): chat_v1.Chat;
export function chat<T = chat_v1.Chat>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1' | chat_v1.Options
) {
  return getAPI<T>('chat', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {chat_v1};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  GaxiosPromise,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';
